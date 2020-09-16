import React from 'react';
import { FiEdit } from 'react-icons/fi';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import CheckButton from '../../../../../components/CheckButton';
import PageDefaultProf from '../../../../../components/PageDefaultProf';
import useForm from '../../../../../hooks/useForm';

import {
  Form,
  ButtonsWrapper,
} from './styled';

const AuthorUpdate: React.FC = () => {
  const valuesInitials = {
    firstname: '',
    lastname: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Alterar autor">
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
      <CheckButton
        label="Ativo"
        checked={true}
        name="active"
        value={values.active}
        onChange={handleChange}
      />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
  </PageDefaultProf>
  );
};

export default AuthorUpdate;
