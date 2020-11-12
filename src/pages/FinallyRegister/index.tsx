import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import PageAuthorized from '../../components/PageAuthorized';

import useForm from '../../hooks/useForm';
import api from '../../services/api';
import util from '../../utils/util';

import { Form, Fieldset, Legend, Description } from './styled';

import { IFinallyRegisterParams } from './interface';

const Article: React.FC = () => {
  const valuesInitials = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const { token }: IFinallyRegisterParams = useParams();
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    async function handleValidateToken() {
      try {
        const response = await api.get(`finalizarCadastro/${token}`);
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });

          history.push('/');
        }

        addToast(
          'Token válido, finalize seu cadastro informando seus dados de acesso',
          {
            appearance: 'success',
            autoDismiss: true,
          }
        );
      } catch (err) {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na validação do token, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      }
    }
    if (token !== undefined) handleValidateToken();
  }, [token, addToast, history]);

  function handleFinallyRegister() {
    if (!util.emptyValue(values.username, 'id_username')) {
      addToast('Preencha o campo de usuário', {
        appearance: 'warning',
        autoDismiss: true,
      });
    }
    if (!util.emptyValue(values.password, 'id_password')) {
      addToast('Preencha o campo de senha', {
        appearance: 'warning',
        autoDismiss: true,
      });
    }
    if (values.password !== values.passwordConfirm) {
      addToast('A senha e a sua confirmação deve ser iguais', {
        appearance: 'warning',
        autoDismiss: true,
      });
    }

    api
      .put(`finalizarCadastro/${token}`, {
        usuario: values.username,
        senha: values.password,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
        }

        if (response.status === 200) {
          addToast(
            'Cadastro finalizado com sucesso, efetue o login na plataforma',
            {
              appearance: 'success',
              autoDismiss: true,
            }
          );
          history.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Ocorreu um erro inesperado na finalização do cadastro, tente novamente mais tarde',
          {
            appearance: 'warning',
            autoDismiss: true,
          }
        );
      });
  }

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
            maxlength={15}
          />
          <FormField
            label="Nova senha"
            name="password"
            value={values.password}
            onChange={handleChange}
            maxlength={32}
          />
          <FormField
            label="Confirme a senha"
            name="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
            maxlength={32}
          />
        </Fieldset>
      </Form>
      <Button color="primary" onClick={handleFinallyRegister}>
        Finalizar
      </Button>
    </PageAuthorized>
  );
};

export default Article;
