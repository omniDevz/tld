import React from 'react';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefaultProf from '../../../components/PageDefaultProf';
import useForm from '../../../hooks/useForm';

import { Form, Fieldset, Legend, Description } from './styled';

const Article: React.FC = () => {
  const valuesInitials = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Finalinar cadastro">
      <Form>
        <Fieldset>
          <Legend>Primeiro acesso</Legend>
          <Description>Finalize com seus dados de acesso</Description>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Nova senha"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <FormField
            label="Confirme a senha"
            name="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
          />
        </Fieldset>
      </Form>
      <Button color="primary">Finalizar</Button>
    </PageDefaultProf>
  );
};

export default Article;
