import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import useForm from '../../../hooks/useForm';

import {
  Form,
  ListArticles,
  ItemArticle,
  HeaderArticle,
  Name,
  Recommendations,
  FooterArticle,
  Infos,
} from './styled';

const Article: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageAuthorized type="back" text="Artigos">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline">Filtrar</Button>
      </Form>
      <ListArticles>
        <ItemArticle>
          <HeaderArticle>
            <Name>Como fazer pão</Name>
            <Link
              to="/authorized/article/update"
              title="Editar dados do artigo"
            >
              <FiEdit />
            </Link>
          </HeaderArticle>
          <Recommendations>
            Que tal aprender a fazer um pão neste artigo totalmente em inglês?
          </Recommendations>

          <FooterArticle>
            <Infos>
              <Recommendations>
                <b>2</b> acessos
              </Recommendations>
              <Recommendations>
                <b>fulano</b>
              </Recommendations>
            </Infos>
          </FooterArticle>
        </ItemArticle>
      </ListArticles>
      <Button
        color="primary-outline"
        to="/authorized/article/new"
        title="Cadastrar artigo"
      >
        Cadastrar artigo
      </Button>
    </PageAuthorized>
  );
};

export default Article;
