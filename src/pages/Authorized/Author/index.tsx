import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefaultProf from '../../../components/PageDefaultProf';

import useForm from '../../../hooks/useForm';

import api from '../../../services/api';

import { Form } from './styled';

import { AuthorProps, AuthorApiProps } from './interface';
import List from './components/List';

const Author: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listAuthors, setListAuthors] = useState<AuthorProps[]>([]);

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get('/autor')
      .then(({ data }) => {
        const authorFromApi: AuthorProps[] = data.map(
          (author: AuthorApiProps) => {
            const newAuthor: AuthorProps = {
              authorId: author.autorId,
              firstname: author.nome,
              lastname: author.sobrenome,
              inactive: author.inativo,
              lastUserUpdate: author.ultimoUsuarioAlteracao,
            };

            return newAuthor;
          }
        );

        setListAuthors(authorFromApi);
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [addToast]);

  return (
    <PageDefaultProf type="back" text="Autores">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline">Filtrar</Button>
      </Form>
      <List list={listAuthors} />
      <Button
        color="primary-outline"
        to="/authorized/author/new"
        title="Cadastrar autor"
      >
        Cadastrar autor
      </Button>
    </PageDefaultProf>
  );
};

export default Author;
