import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import { Form, RadioButtonWrapper } from './styled';

import { MaintainerProps } from './interface';
import RadioButton from '../../../components/RadioButton';

const data = [
  {
    id: 1,
    name: 'Fulano Panda',
    email: 'fulano@gmail.com',
    level: 1,
  },
];

const Maintainer: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listMaintainers, setListMaintainers] = useState<MaintainerProps[]>(
    data
  );
  const [typeFilter, setTypeFilter] = useState('');

  const { addToast } = useToasts();

  function handleTypeFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setTypeFilter(e.target.value);
  }

  return (
    <PageAuthorized type="back" text="Mantenedores">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline">Filtrar</Button>
      </Form>
      <RadioButtonWrapper>
        <RadioButton
          options={[
            {
              label: 'Todos',
              value: '',
            },
            {
              label: 'Professor',
              value: '1',
            },
            {
              label: 'Administrador',
              value: '0',
            },
          ]}
          name="typeFilter"
          value={typeFilter}
          onChange={handleTypeFilter}
        />
      </RadioButtonWrapper>
      <List list={listMaintainers} />
      <Button
        color="primary-outline"
        to="/authorized/maintainer/new"
        title="Cadastrar mantenedor"
      >
        Cadastrar mantenedor
      </Button>
    </PageAuthorized>
  );
};

export default Maintainer;
