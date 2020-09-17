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
  ListArticles,
  ItemArticle,
  HeaderArticle,
  Name,
  Recomendations,
  FooterArticle,
  Infos,
  Actions
} from './styled';

const Article: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Artigos">
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
            <Link to="/authorized/article/update" title="Editar dados do artigo">
              <FiEdit />
            </Link>
        </HeaderArticle>
        <Recomendations>
          Que tal aprender a fazer um pãozin neste artigo totalmente em inglês?
        </Recomendations>

          <FooterArticle>
            <Infos>
              <Recomendations><b>2</b> acessos</Recomendations>
              <Recomendations><b>fulano</b></Recomendations>
            </Infos>
            <Actions>
              <CheckButton
                label="Ativo"
                checked={true}
                name="active"
                value={values.active}
                onChange={handleChange}
              />
            </Actions>
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
  </PageDefaultProf>
  );
};

export default Article;
