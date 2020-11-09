import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import RadioButton from '../../../components/RadioButton';
import CardCourse from './components/CardCourse';

import util from '../../../utils/util';
import api from '../../../services/api';

import { HeaderFilter, ListCard } from './styled';

import { ICourseApi, ICourse } from './interface';

const Course: React.FC = () => {
  const [search, setSearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('');
  const [listCourse, setListCourse] = useState<ICourse[]>([]);

  const { addToast } = useToasts();
  const history = useHistory();

  function handleNewCourse() {
    history.push('/course/new');
  }

  function handleFilterCourses(course: ICourse) {
    return util.includesToArray([course.name, course.description], search);
  }

  function handleGetCoursesFromApi() {
    api
      .get('curso')
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const cousesApi = response.data as ICourseApi[];

        const courses: ICourse[] = cousesApi.map((courseApi) => {
          return {
            courseId: courseApi.cursoId,
            description: courseApi.descricao,
            durationMinute: courseApi.duracaoMinutos,
            hasFree: courseApi.eGratuito,
            name: courseApi.nome,
            price: courseApi.valor,
          } as ICourse;
        });

        setListCourse(courses);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por cursos, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetCoursesFromApi, []);

  return (
    <PageAuthorized type="back" text="Cursos">
      <HeaderFilter>
        <FormField
          label=""
          name="search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <Button color="secondary-outline" onClick={handleGetCoursesFromApi}>
          Pesquisar
        </Button>
      </HeaderFilter>

      <RadioButton
        name="typeSearch"
        options={[
          {
            label: 'Todos',
            value: '',
          },
          {
            label: 'Pagos',
            value: 'P',
          },
          {
            label: 'Gratuitos',
            value: 'G',
          },
        ]}
        value={typeSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTypeSearch(e.target.value)
        }
      />

      <ListCard>
        {!!listCourse.length &&
          listCourse
            .filter(handleFilterCourses)
            .map((course) => (
              <CardCourse key={course.courseId} course={course} />
            ))}
      </ListCard>

      <Button color="primary" onClick={handleNewCourse}>
        Novo curso
      </Button>
    </PageAuthorized>
  );
};

export default Course;
