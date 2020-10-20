import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import api from '../../../services/api';
import util from '../../../utils/util';

import { Form } from './styled';

import { IConsultingType, IConsultingTypeApi } from './interface';

const ConsultingType: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listConsultingType, setListConsultingType] = useState<
    IConsultingType[]
  >([]);

  const { addToast } = useToasts();

  function handleGetListConsultingType() {
    api
      .get('tipoConsultoria')
      .then(({ data }) => {
        const typeConsultFromApi: IConsultingType[] = data.map(
          (consulting: IConsultingTypeApi) => {
            const newTypeConsult: IConsultingType = {
              consultingTypeId: consulting.tipoConsultoriaId,
              description: consulting.descricao,
            };

            return newTypeConsult;
          }
        );

        setListConsultingType(typeConsultFromApi);
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  useEffect(handleGetListConsultingType, []);

  function handleFilterConsultingType(consulting: IConsultingType) {
    return util.includesToArray([consulting.description], values.search);
  }

  return (
    <PageAuthorized type="back" text="Tipo consultoria">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline" onClick={handleGetListConsultingType}>
          Filtrar
        </Button>
      </Form>

      <List list={listConsultingType.filter(handleFilterConsultingType)} />

      <Button
        color="primary-outline"
        to="/consultingType/new"
        title="Cadastrar consultoria"
      >
        Novo tipo consultoria
      </Button>
    </PageAuthorized>
  );
};

export default ConsultingType;
