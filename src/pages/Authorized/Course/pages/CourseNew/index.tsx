import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { PriceWrapper, Fields } from './styled';

const CourseNew: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const { addToast } = useToasts();
  const history = useHistory();

  function handleNewCourse() {
    api
      .post('curso', {
        nome: name,
        descricao: description,
        eGratuito: !price,
        valor: Number(price),
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
    <PageAuthorized type="back" text="Novo curso">
      <Fields>
        <FormField
          label="Nome"
          name="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          maxlength={50}
        />
        <FormField
          label="Descrição"
          name="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          type="textarea"
          maxlength={500}
        />
        <PriceWrapper>
          <FormField
            label="Valor"
            name="price"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
            type="number"
          />
        </PriceWrapper>
      </Fields>

      <Button color="primary" onClick={handleNewCourse}>
        Salvar
      </Button>
    </PageAuthorized>
  );
};

export default CourseNew;
