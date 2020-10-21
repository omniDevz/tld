import React from 'react';
import { useToasts } from 'react-toast-notifications';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

import api from '../../services/api';
import useForm from '../../hooks/useForm';

import imgBackground from '../../assets/images/backgroundNewRegister.svg';

import { Title, FieldSetWrapper, Description, Button, Image } from './styled';

function RecoveryPassword() {
  const valuesInitials = {
    recovery: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();

  function handleSendEmailRecoveryPassword() {
    api
      .post('esqueciMinhaSenha/email', {
        email: values.recovery,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast(
          'Verifique sua caixa de mensagem, enviaremos um e-mail com o próximo passo',
          {
            appearance: 'info',
            autoDismiss: true,
          }
        );
      })
      .catch((err) => {
        console.log(err.response);
        addToast(
          'Houve algum erro inesperado no envio de e-mail para recuperação de senha, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <PageDefault>
      <Title>Recupere sua senha</Title>
      <FieldSetWrapper>
        <FormField
          label="E-mail"
          name="recovery"
          value={values.recovery}
          onChange={handleChange}
        />
        <Description>
          Será enviado um link para seu e-mail, verifique seu spam
        </Description>
      </FieldSetWrapper>
      <Image src={imgBackground} alt="" />
      <Button color="primary-outline" onClick={handleSendEmailRecoveryPassword}>
        Enviar
      </Button>
    </PageDefault>
  );
}

export default RecoveryPassword;
