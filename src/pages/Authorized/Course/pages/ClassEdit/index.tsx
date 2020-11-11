import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { MinutesWrapper, ButtonsWrapper, RowFields, Fields } from './styled';

import { ICourseEditClassParams } from './interface';
import { IClassApi } from '../Detail/interface';

const ClassEdit: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [minutes, setMinutes] = useState('');
  const [number, setNumber] = useState('');

  const { addToast } = useToasts();
  const { idCourse, idClass } = useParams() as ICourseEditClassParams;
  const history = useHistory();

  function handleGetClass() {
    api
      .get(`aula/${idClass}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const classApi = response.data as IClassApi;

        setName(classApi.nome);
        setDescription(classApi.descricao);
        setLink(classApi.linkVideo);
        setNumber(String(classApi.numeroAula));
        setMinutes(String(classApi.duracaoMinutos));
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por cursos, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetClass, []);

  function handleEditClass() {
    api
      .put('aula', {
        aulaId: idClass,
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

        addToast('Aula alterada com sucesso', {
          appearance: 'info',
          autoDismiss: true,
        });
        history.goBack();
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado ao alterar, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleDeleteClass() {
    api
      .delete(`aula/${idClass}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Aula removida com sucesso', {
          appearance: 'info',
          autoDismiss: true,
        });
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado ao remover aula, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <PageAuthorized type="back" text="Alterar aula">
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

      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDeleteClass}>
          Remover
        </Button>
        <Button color="primary" onClick={handleEditClass}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default ClassEdit;
