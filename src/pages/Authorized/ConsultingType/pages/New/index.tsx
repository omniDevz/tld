import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';
import { useAuth } from '../../../../../contexts/auth';

import useForm from '../../../../../hooks/useForm';
import api from '../../../../../services/api';

import { Form } from './styled';

const ConsultingTypeNew: React.FC = () => {
  const valuesInitials = {
    description: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  function handleRegisterAuthor() {
    api
      .post('tipoConsultoria', {
        descricao: values.description,
        ultimoUsuarioAlteracao: user?.personId,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Tipo consultoria cadastrada com sucesso', {
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
    <PageAuthorized type="back" text="Novo tipo de consultoria">
      <Form>
        <FormField
          label="Descrição"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
      </Form>
      <Button color="primary" onClick={handleRegisterAuthor}>
        Salvar
      </Button>
    </PageAuthorized>
  );
};

export default ConsultingTypeNew;
