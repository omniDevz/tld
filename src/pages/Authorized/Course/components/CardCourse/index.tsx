import React from 'react';
import { useHistory } from 'react-router-dom';

import util from '../../../../../utils/util';

import {
  CardCourseWrapper,
  Description,
  Infos,
  Props,
  Title,
  Price,
  Edit,
} from './styled';

import { ICardCourse } from './interface';

const CardCourse: React.FC<ICardCourse> = ({ course }) => {
  const history = useHistory();

  function handleGoDetailCourse() {
    history.push(`/course/${2}`);
  }

  const priceCourse = util.formatPrice(course.price * 100);

  return (
    <CardCourseWrapper>
      <Infos>
        <Title>{course.name}</Title>
        <Description>{course.durationMinute} minutos</Description>
      </Infos>
      <Props>
        <Price>{priceCourse}</Price>
        <Edit onClick={handleGoDetailCourse} />
      </Props>
    </CardCourseWrapper>
  );
};

export default CardCourse;
