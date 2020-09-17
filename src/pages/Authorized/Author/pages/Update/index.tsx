import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageDefaultProf from '../../../../../components/PageDefaultProf';

import api from '../../../../../services/api';

import { Form, ButtonsWrapper } from './styled';

import { ParamsProps } from './interface';

const AuthorUpdate: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  let { authorId } = useParams<ParamsProps>();
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/autor/${authorId}`)
      .then(({ data }) => {
        setFirstname(data.nome);
        setLastname(data.sobrenome);
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [authorId, addToast]);

  function handleUpdateAuthor() {
    api
      .put('/autor', {
        AutorId: authorId,
        Nome: firstname,
        Sobrenome: lastname,
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
        history.push('/authorized/author');
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleDeleteAuthor() {
    api
      .delete(`/autor/${authorId}`)
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
        history.push('/authorized/author');
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  return (
    <PageDefaultProf type="back" text="Alterar autor">
      <Form>
        <FormField
          label="Nome"
          name="firstname"
          value={firstname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstname(e.target.value)
          }
        />
        <FormField
          label="Sobrenome"
          name="lastname"
          value={lastname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastname(e.target.value)
          }
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
    </PageDefaultProf>
  );
};

export default AuthorUpdate;
