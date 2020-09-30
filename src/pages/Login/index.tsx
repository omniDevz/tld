import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import useForm from '../../hooks/useForm';

import api from '../../services/api';

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

function Login() {
  const valuesInitials = {
    username: '',
    password: '',
  };

  const [levelAccess, setLevelAccess] = useState(0);
  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const history = useHistory();

  function handleLevelAccess(level: number) {
    if (levelAccess === 0) {
      setLevelAccess(level);
    } else {
      setLevelAccess(level === 1 ? 2 : 1);
    }
  }

  function handleLogin() {
    const levelInApi = levelAccess === 1 ? 'Administrador' : 'Professor';

    api
      .post(`/${levelInApi}/ValidarLogin${levelInApi}`, {
        Usuario: values.username,
        Senha: values.password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Logado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/authorized/article');
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
}

export default Login;
