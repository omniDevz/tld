import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import PageAuthorized from '../../../../../components/PageAuthorized';
import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';

import api from '../../../../../services/api';

import { Form, Fieldset, ButtonsWrapper } from './styled';

import { ParamsProps } from './interface';

const ClassesUpdate: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  const { idClass } = useParams<ParamsProps>();

  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/turma/${idClass}`)
      .then(({ data }) => {
        setName(data.nome);
        setDescription(data.descricao);
        setCode(data.codigo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idClass, addToast]);

  function handleUpdateClass() {
    api
      .put('/turma', {
        professorId: 1,
        descricao: description,
        turmaId: idClass,
        codigo: code,
        nome: name,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Turma alterada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.goBack();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleDeleteClass() {
    api
      .delete(`/turma/${idClass}`)
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Turma removido com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.goBack();
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  return (
    <PageAuthorized type="back" text="Alterar turma">
      <Form>
        <Fieldset>
          <FormField
            label="Nome da turma"
            name="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <FormField
            label="Descrição"
            name="description"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
        </Fieldset>
        <ButtonsWrapper>
          <Button color="primary" onClick={handleUpdateClass}>
            Salvar turma
          </Button>
          <Button color="primary-outline" onClick={handleDeleteClass}>
            Excluir turma
          </Button>
        </ButtonsWrapper>
      </Form>
    </PageAuthorized>
  );
};

export default ClassesUpdate;
