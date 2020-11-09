import React from 'react';
import { FiEdit } from 'react-icons/fi';

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
  return (
    <CardCourseWrapper>
      <Infos>
        <Title>Nome do curso</Title>
        <Description>15 horas | 15 aulas</Description>
      </Infos>
      <Props>
        <Price>R$ 90,00</Price>
        <Edit />
      </Props>
    </CardCourseWrapper>
  );
};

export default CardCourse;
