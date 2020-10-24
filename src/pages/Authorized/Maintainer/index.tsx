import React, { useEffect, useState } from 'react';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import RadioButton from '../../../components/RadioButton';
import PageAuthorized from '../../../components/PageAuthorized';
import List from './components/List';

import util from '../../../utils/util';
import useForm from '../../../hooks/useForm';
import api from '../../../services/api';

import { Form, RadioButtonWrapper } from './styled';

import { IMaintainer, IAdminApi, ITeacherApi } from './interface';

const Maintainer: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listMaintainers, setListMaintainers] = useState<IMaintainer[]>([]);
  const [typeFilter, setTypeFilter] = useState('');

  async function handleGetListMaintainers() {
    const responseAdm = await api.get('administrador');

    const administratorsFromApi = responseAdm.data.map(
      (adminApi: IAdminApi) => {
        const maintainer: IMaintainer = {
          adminId: adminApi.administradorId,
          email: adminApi.pessoa.email,
          name: `${adminApi.pessoa.nome} ${adminApi.pessoa.sobrenome}`,
          levelAccess: Number(adminApi.nivelAcesso) || 0,
          teacherId: 0,
        };

        return maintainer;
      }
    );

    const responseTeacher = await api.get('professor');

    const teacherFromApi = responseTeacher.data.map(
      (teacherApi: ITeacherApi) => {
        const { pessoa } = teacherApi.administrador;

        const maintainer: IMaintainer = {
          adminId: teacherApi.administrador.administradorId,
          email: pessoa.email,
          name: `${pessoa.nome} ${pessoa.sobrenome}`,
          levelAccess: Number(teacherApi.administrador.nivelAcesso) || 0,
          teacherId: teacherApi.professorId,
        };

        return maintainer;
      }
    );

    const maintainersFromApi = administratorsFromApi.concat(teacherFromApi);

    setListMaintainers(maintainersFromApi);
  }

  useEffect(() => {
    handleGetListMaintainers();
  }, []);

  function handleFilterMaintainer(maintainer: IMaintainer) {
    return util.includesToArray(
      [maintainer.name, maintainer.email],
      values.search
    );
  }

  function handleTypeFilter(maintainer: IMaintainer) {
    switch (typeFilter) {
      case '0':
        return maintainer.levelAccess === 1 || maintainer.levelAccess === 0;
      case '1':
        return maintainer.levelAccess === 2;
      default:
        return true;
    }
  }

  return (
    <PageAuthorized type="back" text="Mantenedores">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline" onClick={handleGetListMaintainers}>
          Filtrar
        </Button>
      </Form>
      <RadioButtonWrapper>
        <RadioButton
          options={[
            {
              label: 'Todos',
              value: '',
            },
            {
              label: 'Professor',
              value: '1',
            },
            {
              label: 'Administrador',
              value: '0',
            },
          ]}
          name="typeFilter"
          value={typeFilter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTypeFilter(e.target.value);
          }}
        />
      </RadioButtonWrapper>
      <List
        list={listMaintainers
          .filter(handleFilterMaintainer)
          .filter(handleTypeFilter)}
      />
      <Button
        color="primary-outline"
        to="/maintainer/new"
        title="Cadastrar mantenedor"
      >
        Cadastrar mantenedor
      </Button>
    </PageAuthorized>
  );
};

export default Maintainer;
