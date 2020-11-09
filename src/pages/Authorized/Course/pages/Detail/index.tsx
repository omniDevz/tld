import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../../../../components/Button';
import PageAuthorized from '../../../../../components/PageAuthorized';

import CardClass from './components/CardClass';

import { ClassesWrapper, ButtonsWrapper } from './styled';

import { ICourseDetailParams } from './interface';

const Detail: React.FC = () => {
  const { idCourse } = useParams() as ICourseDetailParams;

  console.log('idCourse =>>', idCourse);

  return (
    <PageAuthorized type="back" text="Detalhe curso">
      <ClassesWrapper>
        <CardClass />
        <CardClass />
        <CardClass />
      </ClassesWrapper>
      <ButtonsWrapper>
        <Button color="primary-outline">Alterar curso</Button>
        <Button color="primary">Adicionar aula</Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default Detail;
