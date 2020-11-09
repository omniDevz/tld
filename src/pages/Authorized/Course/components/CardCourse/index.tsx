import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  CardCourseWrapper,
  Description,
  Infos,
  Props,
  Title,
  Price,
  Edit,
} from './styled';

const CardCourse: React.FC = () => {
  const history = useHistory();

  function handleGoDetailCourse() {
    history.push(`/course/${2}`);
  }

  return (
    <CardCourseWrapper>
      <Infos>
        <Title>Nome do curso</Title>
        <Description>15 horas | 15 aulas</Description>
      </Infos>
      <Props>
        <Price>R$ 90,00</Price>
        <Edit onClick={handleGoDetailCourse} />
      </Props>
    </CardCourseWrapper>
  );
};

export default CardCourse;
