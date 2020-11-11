import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  CardClassWrapper,
  Description,
  Infos,
  Props,
  Title,
  Edit,
} from './styled';

import { ICardClass } from './interface';

const CardCourse: React.FC<ICardClass> = ({ classRoom }) => {
  const history = useHistory();

  function handleGoClassEdit() {
    history.push(
      `/course/${classRoom.courseId}/edit/class/${classRoom.classId}`
    );
  }

  return (
    <CardClassWrapper>
      <Infos>
        <Title>{classRoom.name}</Title>
        <Description>{classRoom.timeMinutes} minutos</Description>
      </Infos>
      <Props>
        <Edit onClick={handleGoClassEdit} />
      </Props>
    </CardClassWrapper>
  );
};

export default CardCourse;
