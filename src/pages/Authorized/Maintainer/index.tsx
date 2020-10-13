import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import { Form, RadioButtonWrapper } from './styled';

import { IMaintainer, IMaintainerApi } from './interface';
import RadioButton from '../../../components/RadioButton';
import api from '../../../services/api';
import util from '../../../utils/util';

const Maintainer: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listMaintainers, setListMaintainers] = useState<IMaintainer[]>([]);
  const [typeFilter, setTypeFilter] = useState('');

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get('/administrador/')
      .then(({ data }) => {
        const maintainersFromApi = data.map((maintainerApi: IMaintainerApi) => {
          const maintainer: IMaintainer = {
            adminId: maintainerApi.administradorId,
            email: maintainerApi.pessoa.email,
            name: `${maintainerApi.pessoa.nome} ${maintainerApi.pessoa.sobrenome}`,
            levelAccess: Number(maintainerApi.nivelAcesso) || 0,
          };

          return maintainer;
        });

        setListMaintainers(maintainersFromApi);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca de munícipios, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [addToast]);

  function handleFilterMaintainer(maintainer: IMaintainer) {
    return util.includesToArray(
      [maintainer.name, maintainer.email],
      values.search
    );
  }

  function handleTypeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setTypeFilter(e.target.value);
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
        <Button color="secondary-outline">Filtrar</Button>
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
          onChange={handleTypeFilter}
        />
      </RadioButtonWrapper>
      <List
        list={listMaintainers.filter((maintainer) =>
          handleFilterMaintainer(maintainer)
        )}
      />
      <Button
        color="primary-outline"
        to="/authorized/maintainer/new"
        title="Cadastrar mantenedor"
      >
        Cadastrar mantenedor
      </Button>
    </PageAuthorized>
  );
};

export default Maintainer;
