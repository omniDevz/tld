import React, { useEffect } from 'react';

import PageDefault from '../../../../components/PageDefault';
import FormField from '../../../../components/FormField';

import useForm from '../../../../hooks/useForm';

import imgBackground from '../../../../assets/images/backgroundNewRegisterStepTree.svg';

import { Title, Form, FieldSetWrapper, Button, Image } from './styled';
import api from '../../../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import { IRecoveryPasswordParams } from './interface';
import { useToasts } from 'react-toast-notifications';

function RecoveryPasswordNew() {
  const valuesInitials = {
    newPassword: '',
    confirmPassword: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const { token } = useParams() as IRecoveryPasswordParams;
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    api
      .post('esqueciMinhaSenha/validarToken', {
        token,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });

          history.push('/recoveryPassword');
          return;
        }

        addToast('Informe a sua nova senha', {
          appearance: 'info',
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.log(err.response);
        addToast(
          'Houve algum erro inesperado na validação de seu token, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
        history.push('/recoveryPassword');
      });
  }, [token, addToast, history]);

  function handleNewPassword() {
    if (values.newPassword.length === 0) {
      addToast('Informe sua nova senha', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_newPassword')?.focus();
      return;
    }
    if (values.confirmPassword.length === 0) {
      addToast('Informe a confirmação da senha', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_confirmPassword')?.focus();
      return;
    }
    if (values.confirmPassword !== values.newPassword) {
      addToast('A senha e a confirmação devem ser iguais', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_newPassword')?.focus();
      return;
    }

    api
      .post('esqueciMinhaSenha', {
        token,
        novaSenha: values.newPassword,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Senha alterada com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
        addToast('Efetue seu login', {
          appearance: 'info',
          autoDismiss: true,
        });
        history.push('/login');
      })
      .catch((err) => {
        console.log(err.response);
        addToast(
          'Houve algum erro inesperado na definição de sua senha, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <PageDefault>
      <Title>Informe a nova senha</Title>
      <Form>
        <FieldSetWrapper>
          <FormField
            label="Nova senha"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            type="password"
          />
          <FormField
            label="Confirme a senha"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            type="password"
          />
        </FieldSetWrapper>
      </Form>
      <Image src={imgBackground} alt="" />
      <Button color="primary-outline" onClick={handleNewPassword}>
        Salvar
      </Button>
    </PageDefault>
  );
}

export default RecoveryPasswordNew;
