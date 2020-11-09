import React, { useState } from 'react';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

import PageAuthorized from '../../../components/PageAuthorized';
import RadioButton from '../../../components/RadioButton';
import CardCourse from './components/CardCourse';

import { HeaderFilter, ListCard } from './styled';

const Course: React.FC = () => {
  const [search, setSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('');

  return (
    <PageAuthorized type="back" text="Cursos">
      <HeaderFilter>
        <FormField
          label=""
          name="search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <Button color="secondary-outline">Pesquisar</Button>
      </HeaderFilter>

      <RadioButton
        name="typeSearch"
        options={[
          {
            label: 'Todos',
            value: '',
          },
          {
            label: 'Pagos',
            value: 'P',
          },
          {
            label: 'Gratuitos',
            value: 'G',
          },
        ]}
        value={typeSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTypeSearch(e.target.value)
        }
      />

      <ListCard>
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </ListCard>
    </PageAuthorized>
  );
};

export default Course;
