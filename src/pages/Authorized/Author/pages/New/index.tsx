import React from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageDefaultProf from '../../../../../components/PageDefaultProf';

import useForm from '../../../../../hooks/useForm';

import {
  Form
} from './styled';

const AuthorNew: React.FC = () => {
  const valuesInitials = {
    firstname: '',
    lastname: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Novo autor">
    <Form>
      <FormField
        label="Nome"
        name="firstname"
        value={values.firstname}
        onChange={handleChange}
      />
      <FormField
        label="Sobrenome"
        name="lastname"
        value={values.lastname}
        onChange={handleChange}
      />
      </Form>
      <Button color="primary">Salvar</Button>
  </PageDefaultProf>
  );
};

export default AuthorNew;
