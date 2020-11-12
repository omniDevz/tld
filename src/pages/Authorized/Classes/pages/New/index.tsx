import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router';

import PageAuthorized from '../../../../../components/PageAuthorized';
import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';

import useForm from '../../../../../hooks/useForm';
import { useAuth } from '../../../../../contexts/auth';

import api from '../../../../../services/api';

import { Form } from './styled';

const ClassesNew: React.FC = () => {
  const valuesInitials = {
    name: '',
    description: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const history = useHistory();
  const { user } = useAuth();

  const handleSubmitClass = () => {
    api
      .post('/turma', {
        ProfessorId: user?.teacherId,
        Nome: values.name,
        Descricao: values.description,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        history.push('/classes');

        addToast('Turma cadastrada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

  return (
    <PageAuthorized type="back" text="Nova turma">
      <Form>
        <FormField
          label="Nome da turma"
          name="name"
          value={values.name}
          onChange={handleChange}
          maxlength={50}
        />
        <FormField
          label="Descrição"
          name="description"
          value={values.description}
          onChange={handleChange}
          maxlength={100}
        />
        <Button color="primary" onClick={handleSubmitClass}>
          Cadastrar turma
        </Button>
      </Form>
    </PageAuthorized>
  );
};

export default ClassesNew;
