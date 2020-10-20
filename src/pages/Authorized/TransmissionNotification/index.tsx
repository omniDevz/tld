import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import { useAuth } from '../../../contexts/auth';

import useForm from '../../../hooks/useForm';
import api from '../../../services/api';

import { FieldsWrapper, Form } from './styled';

const TransmissionNotification: React.FC = () => {
  const valuesInitials = {
    description: '',
    link: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  function handleInitTransmission() {
    api
      .post('notificacaoTransmissao', {
        professorId: user?.teacherId,
        descricao: values.description,
        link: values.link,
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

        addToast('Live iniciada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push(`/transmissionNotification/live/${data}`);
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
    <PageAuthorized type="back" text="Live">
      <Form>
        <FieldsWrapper>
          <FormField
            label="Descrição"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <FormField
            label="Link"
            name="link"
            value={values.link}
            onChange={handleChange}
            type="url"
          />
        </FieldsWrapper>
      </Form>
      <Button color="primary" onClick={handleInitTransmission}>
        Começar live
      </Button>
    </PageAuthorized>
  );
};

export default TransmissionNotification;
