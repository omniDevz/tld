import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';

import api from '../../../services/api';

import {
  ButtonWrapper,
  Descriptions,
  Information,
  TwoColumns,
  ListClass,
  ItemClass,
  Form,
  Name,
} from './styled';

import { ClassApiProps, ClassProps } from './interface';
import util from '../../../utils/util';
import { useAuth } from '../../../contexts/auth';

const Classes: React.FC = () => {
  const [search, setSearch] = useState('');
  const [listClasses, setListClasses] = useState<ClassProps[]>();

  const { user } = useAuth();

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get(`movAlunoTurma/professorId/${user?.teacherId}`)
      .then(({ data }) => {
        console.log(data);
        const classFromApi: ClassProps[] = data.map((c: ClassApiProps) => {
          const newClass: ClassProps = {
            classId: c.turma.turmaId,
            name: c.turma.nome,
            description: c.turma.descricao,
            quizzes: c.quantidadeQuizRealizados,
            students: c.quantidadeAlunos,
          };

          return newClass;
        });

        setListClasses(classFromApi);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado na consulta de turma, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [user, addToast]);

  function handleFilterClasses(c: ClassProps): boolean {
    return util.includesToArray([c.name, c.description], search);
  }

  return (
    <PageAuthorized type="back" text="Turmas">
      <Form>
        <FormField
          label="Pesquisar"
          name="search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </Form>
      <ListClass>
        {listClasses &&
          listClasses
            .filter((className) => handleFilterClasses(className))
            .map(({ classId, name, description, quizzes, students }) => (
              <ItemClass key={classId}>
                <Descriptions>
                  <Name>{name}</Name>
                  <Information>{description}</Information>
                  <TwoColumns>
                    <Information>
                      <b>{quizzes}</b> quizzes realizados
                    </Information>
                    |
                    <Information>
                      <b>{students}</b> alunos
                    </Information>
                  </TwoColumns>
                </Descriptions>
                <Link to={`/classes/${classId}`} title="Detalhes da turma">
                  <FiUsers />
                </Link>
              </ItemClass>
            ))}
      </ListClass>
      <ButtonWrapper>
        <Button color="primary">
          <Link to="/classes/new">Nova turma</Link>
        </Button>
      </ButtonWrapper>
    </PageAuthorized>
  );
};

export default Classes;
