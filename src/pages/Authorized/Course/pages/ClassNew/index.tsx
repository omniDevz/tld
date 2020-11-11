import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { MinutesWrapper, Fields, RowFields } from './styled';

import { ICourseNewClassParams } from './interface';

const ClassNew: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [minutes, setMinutes] = useState('');
  const [number, setNumber] = useState('');

  const { addToast } = useToasts();
  const { idCourse } = useParams() as ICourseNewClassParams;
  const history = useHistory();

  function handleNewClass() {
    api
      .post('aula', {
        cursoId: idCourse,
        nome: name,
        descricao: description,
        linkVideo: link,
        numeroAula: number,
        duracaoMinutos: minutes,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Curso cadastrado com sucesso', {
          appearance: 'info',
          autoDismiss: true,
        });
        history.goBack();
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado ao cadastrar, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <PageAuthorized type="back" text="Nova aula">
      <Fields>
        <FormField
          label="Nome"
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
        <FormField
          label="Link"
          name="link"
          value={link}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLink(e.target.value)
          }
          type="url"
        />
        <RowFields>
          <FormField
            label="Número da aula"
            name="number"
            value={number}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
            type="number"
          />
          <MinutesWrapper>
            <FormField
              label="Tempo"
              name="minutes"
              value={minutes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinutes(e.target.value)
              }
            />
          </MinutesWrapper>
        </RowFields>
      </Fields>

      <Button color="primary" onClick={handleNewClass}>
        Salvar
      </Button>
    </PageAuthorized>
  );
};

export default ClassNew;
