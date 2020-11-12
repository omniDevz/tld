import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { IArticleAuthorSelect } from './interface';
import { IAuthorApi } from '../../interface';

import { Form, ButtonsWrapper, InputAndButton } from './styled';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import Select from '../../../../../components/Select';
import { useAuth } from '../../../../../contexts/auth';

const ArticleNew: React.FC = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [link, setLink] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [authorIdSelected, setAuthorIdSelected] = useState('');
  const [firstNameAuthor, setFirstNameAuthor] = useState('');
  const [lastNameAuthor, setLastNameAuthor] = useState('');
  const [listAuthors, setListAuthors] = useState<IArticleAuthorSelect[]>([]);
  const [addAuthor, setAddAuthor] = useState(false);

  const history = useHistory();
  const { addToast } = useToasts();
  const { user } = useAuth();

  useEffect(() => {
    api
      .get('autor')
      .then(({ data }) => {
        const authorFromApi: IArticleAuthorSelect[] = data.map(
          (author: IAuthorApi) => {
            const newAuthor: IArticleAuthorSelect = {
              value: String(author.autorId),
              label: `${author.nome} ${author.sobrenome}`,
            };

            return newAuthor;
          }
        );

        setListAuthors(authorFromApi);
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [addToast]);

  function handleNewArticle() {
    api
      .post('/artigo', {
        titulo: title,
        subtitulo: subtitle,
        linkArtigo: link,
        autorId: authorIdSelected || 0,
        autor: addAuthor
          ? {
              nome: firstNameAuthor,
              sobrenome: lastNameAuthor,
            }
          : null,
        dataPublicacao: publishDate,
        ultimoUsuarioAlteracao: user?.personId,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Artigo alterado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/article');
      })
      .catch((err) => {
        console.error(err.response);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  return (
    <PageAuthorized type="back" text="Novo artigo">
      <Form>
        <FormField
          label="Título"
          name="title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          maxlength={50}
        />
        <FormField
          label="Descrição"
          name="subtitle"
          value={subtitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSubtitle(e.target.value)
          }
          maxlength={50}
        />
        <FormField
          label="Link"
          name="link"
          value={link}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLink(e.target.value)
          }
          type="url"
          maxlength={500}
        />
        <InputAndButton>
          {addAuthor ? (
            <FormField
              label="Nome Autor"
              name="firstNameAuthor"
              value={firstNameAuthor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstNameAuthor(e.target.value);
              }}
              maxlength={50}
            />
          ) : (
            <Select
              name="authorId"
              label="Autor"
              onChange={(e: any) => setAuthorIdSelected(e.value)}
              value={String(authorIdSelected)}
              options={listAuthors}
            />
          )}

          <Button color="secondary" onClick={() => setAddAuthor(!addAuthor)}>
            {addAuthor ? <FiUserPlus /> : <FiUsers />}
          </Button>
        </InputAndButton>
        {addAuthor && (
          <FormField
            label="Sobrenome Autor"
            name="lastNameAuthor"
            value={lastNameAuthor}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLastNameAuthor(e.target.value);
            }}
            maxlength={50}
          />
        )}
        <FormField
          label="Data publicação"
          name="date"
          value={publishDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPublishDate(e.target.value)
          }
          type="date"
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary" onClick={handleNewArticle}>
          Cadastrar artigo
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default ArticleNew;
