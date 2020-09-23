import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefaultProf from '../../../components/PageDefaultProf';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import api from '../../../services/api';

import { Form } from './styled';

import { StudentProps } from './interface';
import RadioButton from '../../../components/RadioButton';

const data = [
  {
    id: 1,
    name: 'Fulano Panda',
    email: 'fulano@gmail.com',
    fone: '+55 (016) 12345-1234',
  },
];

const Student: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listStudents, setListStudents] = useState<StudentProps[]>(data);
  const [typeFilter, setTypeFilter] = useState('');

  const { addToast } = useToasts();

  function handleTypeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setTypeFilter(e.target.value);
  }

  return (
    <PageDefaultProf type="back" text="Alunos">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline">Filtrar</Button>
      </Form>
      <List list={listStudents} />
    </PageDefaultProf>
  );
};

export default Student;
