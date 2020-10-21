import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import useForm from '../../../hooks/useForm';

import api from '../../../services/api';
import util from '../../../utils/util';

import {
  Recommendations,
  HeaderArticle,
  FooterArticle,
  ListArticles,
  ItemArticle,
  Infos,
  Form,
  Name,
} from './styled';

import { IArticle, IArticleApi } from './interface';

const Article: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listArticles, setListArticles] = useState<IArticle[]>();

  const { addToast } = useToasts();

  function handleGetListArticles() {
    api
      .get('artigo')
      .then(({ data }) => {
        const articleFromApi: IArticle[] = data.map((article: IArticleApi) => {
          const newArticle: IArticle = {
            articleId: article.artigoId,
            authorId: article.autorId,
            author: {
              authorId: article.autor.autorId,
              firstName: article.autor.nome,
              lastName: article.autor.sobrenome,
            },
            title: article.titulo,
            subtitle: article.subtitulo,
            quantityAccess: article.quantidadeAcesso,
            linkArticle: article.linkArtigo,
            publishDate: article.dataPublicacao,
          };

          return newArticle;
        });

        setListArticles(articleFromApi);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por mantenedores, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetListArticles, []);

  function handleFilterArticles(article: IArticle) {
    return util.includesToArray(
      [
        article.title,
        article?.subtitle || '',
        article.author.firstName,
        article.author.lastName,
      ],
      values.search
    );
  }

  return (
    <PageAuthorized type="back" text="Artigos">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline" onClick={handleGetListArticles}>
          Filtrar
        </Button>
      </Form>
      <ListArticles>
        {listArticles &&
          listArticles.filter(handleFilterArticles).map((article) => {
            return (
              <ItemArticle key={article.articleId}>
                <HeaderArticle>
                  <Name>{article.title}</Name>
                  <Link
                    to={`/article/update/${article.articleId}`}
                    title="Editar dados do artigo"
                  >
                    <FiEdit />
                  </Link>
                </HeaderArticle>
                <Recommendations>{article.subtitle}</Recommendations>

                <FooterArticle>
                  <Infos>
                    <Recommendations>
                      <b>{`${article.author.firstName} ${article.author.lastName}`}</b>{' '}
                      | <b>{article.quantityAccess}</b> acessos
                    </Recommendations>
                  </Infos>
                </FooterArticle>
              </ItemArticle>
            );
          })}
      </ListArticles>
      <Button
        color="primary-outline"
        to="/article/new"
        title="Cadastrar artigo"
      >
        Cadastrar artigo
      </Button>
    </PageAuthorized>
  );
};

export default Article;
