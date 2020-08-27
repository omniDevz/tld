import React from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import {
  Title,
  Form,
  FieldSetWrapper,
  LinkRecoveryPassword,
  Button,
} from './styled';

function Login() {
  const valuesInitials = {
    username: '',
    password: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Login</Title>
      <Form>
        <FieldSetWrapper>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
          />
        </FieldSetWrapper>
      </Form>
      <LinkRecoveryPassword to="/recoveryPassword" title="Recupere sua senha">
        Esqueceu a Senha?
      </LinkRecoveryPassword>
      <Button color="primary-outline">Entrar</Button>
    </PageDefault>
  );
}

export default Login;
