import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { Form, ButtonsWrapper } from './styled';

import { ParamsProps } from './interface';

const AuthorUpdate: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let { authorId } = useParams<ParamsProps>();
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`autor/${authorId}`)
      .then(({ data }) => {
        setFirstName(data.nome);
        setLastName(data.sobrenome);
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [authorId, addToast]);

  function handleUpdateAuthor() {
    api
      .put('autor', {
        AutorId: authorId,
        Nome: firstName,
        Sobrenome: lastName,
        UltimoUsuarioAlteracao: 1,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Autor alterado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/author');
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleDeleteAuthor() {
    api
      .delete(`autor/${authorId}`)
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Autor removido com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/author');
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
    <PageAuthorized type="back" text="Alterar autor">
      <Form>
        <FormField
          label="Nome"
          name="firstName"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
          maxlength={50}
        />
        <FormField
          label="Sobrenome"
          name="lastName"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
          maxlength={50}
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDeleteAuthor}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleUpdateAuthor}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default AuthorUpdate;
