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

const CardCourse: React.FC = () => {
  const history = useHistory();

  function handleGoClassEdit() {
    history.push(`/course/${2}/edit/class/${2}`);
  }

  return (
    <CardClassWrapper>
      <Infos>
        <Title>Nome da aula</Title>
        <Description>40 minutos</Description>
      </Infos>
      <Props>
        <Edit onClick={handleGoClassEdit} />
      </Props>
    </CardClassWrapper>
  );
};

export default CardCourse;
