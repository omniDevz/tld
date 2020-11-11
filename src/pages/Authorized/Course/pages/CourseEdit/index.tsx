import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useParams } from 'react-router-dom';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { ButtonsWrapper, PriceWrapper, Fields } from './styled';

import { ICourseEditParams } from './interface';
import { ICourseApi, ICourse } from '../../interface';
import util from '../../../../../utils/util';

const CourseEdit: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const { idCourse } = useParams() as ICourseEditParams;
  const { addToast } = useToasts();

  function handleGetCourseFromApi() {
    api
      .get(`curso/byId/${idCourse}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const courseApi = response.data as ICourseApi;

        setName(courseApi.nome);
        setDescription(courseApi.descricao);
        setPrice(courseApi.valor);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por curso, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetCourseFromApi, []);

  return (
    <PageAuthorized type="back" text="Alterar curso">
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
          type="textarea"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
        <PriceWrapper>
          <FormField
            label="Valor"
            name="price"
            value={String(price)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(Number(util.onlyNumbers(e.target.value)))
            }
          />
        </PriceWrapper>
      </Fields>

      <ButtonsWrapper>
        <Button color="primary-outline">Remover</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default CourseEdit;
