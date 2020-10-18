import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import PageAuthorized from '../../components/PageAuthorized';

import useForm from '../../hooks/useForm';
import api from '../../services/api';

import { Form, Fieldset, Legend, Description } from './styled';

import { IFinallyRegisterParams } from './interface';

const Article: React.FC = () => {
  const valuesInitials = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const routes = useParams();
  const { addToast } = useToasts();

  const { token } = routes as IFinallyRegisterParams;

  useEffect(() => {
    api
      .get(`/mantenedor/token`)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na validação do token, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [token]);

  return (
    <PageAuthorized type="back" text="Finalizar cadastro">
      <Form>
        <Fieldset>
          <Legend>Primeiro acesso</Legend>
          <Description>Finalize com seus dados de acesso</Description>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Nova senha"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <FormField
            label="Confirme a senha"
            name="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
          />
        </Fieldset>
      </Form>
      <Button color="primary">Finalizar</Button>
    </PageAuthorized>
  );
};

export default Article;
