import React, { useState } from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import { MinutesWrapper, ButtonsWrapper, NameCourse, Fields } from './styled';

const ClassEdit: React.FC = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [minutes, setMinutes] = useState('');
  const [course] = useState('Nome do curso');

  return (
    <PageAuthorized type="back" text="Alterar aula">
      <Fields>
        <NameCourse>{course}</NameCourse>
        <FormField
          label="Nome"
          name="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
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
      </Fields>

      <ButtonsWrapper>
        <Button color="primary-outline">Remover</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default ClassEdit;
