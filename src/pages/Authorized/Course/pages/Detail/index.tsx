import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import PageAuthorized from '../../../../../components/PageAuthorized';

import CardClass from './components/CardClass';

import { ClassesWrapper, ButtonsWrapper } from './styled';

import {
  IClass,
  ICourseDetailParams,
  ICourseDetail,
  ICourseApiDetail,
} from './interface';
import api from '../../../../../services/api';
import { ICourse, ICourseApi } from '../../interface';

const Detail: React.FC = () => {
  const [course, setCourse] = useState<ICourseDetail>({} as ICourseDetail);
  const [listClass, setListClass] = useState<IClass[]>([]);

  const { idCourse } = useParams() as ICourseDetailParams;
  const { addToast } = useToasts();

  const history = useHistory();

  function handleEditCourse() {
    history.push(`/course/edit/${idCourse}`);
  }

  function handleNewClass() {
    history.push(`/course/${idCourse}/new/class`);
  }

  function handleGetCourseFromApi() {
    api
      .get(`curso/byId/${idCourse}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const courseApi = response.data as ICourseApiDetail;

        const classes = courseApi.aulas.map((classApi) => {
          return {
            classId: classApi.aulaId,
            courseId: classApi.cursoId,
            description: classApi.descricao,
            link: classApi.linkVideo,
            name: classApi.nome,
            numberClass: classApi.numeroAula,
            timeMinutes: classApi.duracaoMinutos,
          } as IClass;
        });

        setCourse({
          courseId: courseApi.cursoId,
          description: courseApi.descricao,
          durationMinute: courseApi.duracaoMinutos,
          hasFree: courseApi.eGratuito,
          name: courseApi.nome,
          price: courseApi.valor,
        });

        setListClass(classes);
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

  useEffect(handleGetCourseFromApi, []);

  return (
    <PageAuthorized type="back" text={course.name}>
      <ClassesWrapper>
        {!!listClass.length &&
          listClass.map((c) => <CardClass key={c.classId} classRoom={c} />)}
      </ClassesWrapper>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleEditCourse}>
          Alterar curso
        </Button>
        <Button color="primary" onClick={handleNewClass}>
          Adicionar aula
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default Detail;
