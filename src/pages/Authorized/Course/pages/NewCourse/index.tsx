import React, { useState } from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import { PriceWrapper, Fields } from './styled';

const NewCourse: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <PageAuthorized type="back" text="Novo curso">
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

      <Button color="primary">Salvar</Button>
    </PageAuthorized>
  );
};

export default NewCourse;
