import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import api from '../../../services/api';

import { Form } from './styled';

import { IAuthor, IAuthorApi } from './interface';
import util from '../../../utils/util';

const Author: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listAuthors, setListAuthors] = useState<IAuthor[]>([]);

  const { addToast } = useToasts();

  function handleGetListAuthors() {
    api
      .get('autor')
      .then(({ data }) => {
        const authorFromApi: IAuthor[] = data.map((author: IAuthorApi) => {
          const newAuthor: IAuthor = {
            authorId: author.autorId,
            firstName: author.nome,
            lastName: author.sobrenome,
            inactive: author.inativo,
            lastUserUpdate: author.ultimoUsuarioAlteracao,
          };

          return newAuthor;
        });

        setListAuthors(authorFromApi);
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  useEffect(handleGetListAuthors, []);

  function handleFilterAuthors(author: IAuthor) {
    return util.includesToArray(
      [author.firstName, author.lastName],
      values.search
    );
  }

  return (
    <PageAuthorized type="back" text="Autores">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline" onClick={handleGetListAuthors}>
          Filtrar
        </Button>
      </Form>

      <List list={listAuthors.filter(handleFilterAuthors)} />

      <Button color="primary-outline" to="/author/new" title="Cadastrar autor">
        Cadastrar autor
      </Button>
    </PageAuthorized>
  );
};

export default Author;
