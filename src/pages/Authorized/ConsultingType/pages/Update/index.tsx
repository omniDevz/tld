import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { Form, ButtonsWrapper } from './styled';

import { IParamsConsultingTypeUpdate } from './interface';
import { useAuth } from '../../../../../contexts/auth';

const ConsultingTypeUpdate: React.FC = () => {
  const [description, setDescription] = useState('');

  let { consultingTypeId } = useParams<IParamsConsultingTypeUpdate>();
  const { addToast } = useToasts();
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    api
      .get(`tipoConsultoria/${consultingTypeId}`)
      .then(({ data }) => {
        setDescription(data.descricao);
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [consultingTypeId, addToast]);

  function handleUpdateConsultingType() {
    api
      .put('tipoConsultoria', {
        tipoConsultoriaId: consultingTypeId,
        descricao: description,
        UltimoUsuarioAlteracao: user?.personId,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Tipo de consultoria alterada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/consultingType');
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleDeleteConsultingType() {
    api
      .delete(`tipoConsultoria/${consultingTypeId}`)
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Tipo de consultoria removida com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/consultingType');
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  return (
    <PageAuthorized type="back" text="Alterar tipo de consultoria">
      <Form>
        <FormField
          label="Nome"
          name="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          maxlength={50}
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDeleteConsultingType}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleUpdateConsultingType}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default ConsultingTypeUpdate;
