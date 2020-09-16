import React from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import CheckButton from '../../../../../components/CheckButton';
import PageDefaultProf from '../../../../../components/PageDefaultProf';

import useForm from '../../../../../hooks/useForm';

import {
  Form,
  ButtonsWrapper
} from './styled';

const ArticleUpdate: React.FC = () => {
  const valuesInitials = {
    title: '',
    description: '',
    link: '',
    author: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Alterar artigo">
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

export default ArticleUpdate;
