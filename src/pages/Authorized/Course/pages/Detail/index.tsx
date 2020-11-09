import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../../../../../components/Button';
import PageAuthorized from '../../../../../components/PageAuthorized';

import CardClass from './components/CardClass';

import { ClassesWrapper, ButtonsWrapper } from './styled';

import { ICourseDetailParams } from './interface';

const Detail: React.FC = () => {
  const { idCourse } = useParams() as ICourseDetailParams;

  console.log('idCourse =>>', idCourse);

  const history = useHistory();

  function handleEditCourse() {
    history.push(`/course/edit/${idCourse}`);
  }

  function handleNewClass() {
    history.push(`/course/${idCourse}/new/class`);
  }

  return (
    <PageAuthorized type="back" text="Nome do curso">
      <ClassesWrapper>
        <CardClass />
        <CardClass />
        <CardClass />
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
