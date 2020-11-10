import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import { ButtonsWrapper, PriceWrapper, Fields } from './styled';

import { ICourseEditParams } from './interface';

const CourseEdit: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const { idCourse } = useParams() as ICourseEditParams;

  console.log(idCourse);

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          type="textarea"
        />
        <PriceWrapper>
          <FormField
            label="Valor"
            name="price"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
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
