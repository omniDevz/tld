import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';
import { useAuth } from '../../contexts/auth';

import {
  LinkRecoveryPassword,
  FieldSetWrapper,
  WrapperButton,
  TypesLogin,
  Button,
  Title,
  Form,
} from './styled';
import { useToasts } from 'react-toast-notifications';

const Login = () => {
  const valuesInitials = {
    username: '',
    password: '',
  };

  const [levelAccess, setLevelAccess] = useState(0);
  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const { signIn } = useAuth();

  function handleLevelAccess(level: number) {
    if (levelAccess === 0) {
      setLevelAccess(level);
    } else {
      setLevelAccess(level === 1 ? 2 : 1);
    }
  }

  function handleLogin() {
    signIn(values.username, values.password, levelAccess);
  }

  useEffect(() => {
    if (window.location.href.search('tokenExpired') <= 0) return;

    addToast('Sua autenticação expirou, efetue o login novamente', {
      appearance: 'info',
      autoDismiss: true,
    });

    document.getElementById('id_username')?.focus();
  }, [addToast]);

  return (
    <PageDefault>
      {levelAccess !== 0 ? (
        <>
          <Title>
            Login do {levelAccess === 1 ? 'administrador' : 'professor'}
          </Title>
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
          <LinkRecoveryPassword
            to="/recoveryPassword"
            title="Recupere sua senha"
          >
            Esqueceu a Senha?
          </LinkRecoveryPassword>
          <WrapperButton>
            <Button
              color="primary-outline"
              onClick={() => handleLevelAccess(levelAccess)}
            >
              Acessar como {levelAccess === 2 ? 'administrador' : 'professor'}
            </Button>
            <Button color="primary" onClick={handleLogin}>
              Entrar
            </Button>
          </WrapperButton>
        </>
      ) : (
        <TypesLogin>
          <Button color="primary-outline" onClick={() => handleLevelAccess(1)}>
            Administrador
          </Button>
          <Button color="primary-outline" onClick={() => handleLevelAccess(2)}>
            Professor
          </Button>
        </TypesLogin>
      )}
    </PageDefault>
  );
};

export default Login;
