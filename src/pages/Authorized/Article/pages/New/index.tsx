import React from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageDefaultProf from '../../../../../components/PageDefaultProf';

import useForm from '../../../../../hooks/useForm';

import {
  Form
} from './styled';

const ArticleNew: React.FC = () => {
  const valuesInitials = {
    title: '',
    description: '',
    link: '',
    author: '',
    date: ''
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Novo artigo">
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
      <FormField
        label="Data de publicação"
        name="date"
        value={values.date}
        onChange={handleChange}
        type="date"
      />
    </Form>
    <Button color="primary">Salvar</Button>
  </PageDefaultProf>
  );
};

export default ArticleNew;
