import React from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import useForm from '../../../../../hooks/useForm';

import { Form, ButtonsWrapper } from './styled';

const ArticleUpdate: React.FC = () => {
  const valuesInitials = {
    title: '',
    description: '',
    link: '',
    author: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageAuthorized type="back" text="Alterar artigo">
      <Form>
        <FormField
          label="Título"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Link"
          name="link"
          value={values.link}
          onChange={handleChange}
          type="url"
        />
        <FormField
          label="Autor"
          name="author"
          value={values.author}
          onChange={handleChange}
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default ArticleUpdate;
