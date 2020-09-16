import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import CheckButton from '../../../components/CheckButton';
import PageDefaultProf from '../../../components/PageDefaultProf';
import useForm from '../../../hooks/useForm';

import {
  Form,
  ListAuthors,
  ItemAuthor,
  HeaderAuthor,
  Name,
  Recomendations,
} from './styled';

const Author: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

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
    <ListAuthors>
      <ItemAuthor>
        <HeaderAuthor>
          <Name>Nome do autor</Name>
            <Link to="/authorized/author/update" title="Editar dados de fulano">
              <FiEdit />
            </Link>
        </HeaderAuthor>
        <Recomendations><b>3</b> recomendações</Recomendations>
        <CheckButton
          label="Ativo"
          checked={true}
          name="active"
          value={values.active}
          onChange={handleChange}
        />
      </ItemAuthor>
    </ListAuthors>
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
