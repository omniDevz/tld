import React from 'react';

import util from '../../../../../../../utils/util';

import {
  CardStudentWrapper,
  CreateAccount,
  NameStudent,
  Contact,
  Bold,
} from './styled';

import { ICardStudent } from './interface';
import mask from '../../../../../../../utils/mask';

const CardStudent: React.FC<ICardStudent> = ({ student }) => {
  return (
    <CardStudentWrapper>
      <NameStudent>{student.nameStudent}</NameStudent>
      <Contact>{student.emailStudent}</Contact>
      <Contact>{mask.phoneComplete(student.phone)}</Contact>
      <CreateAccount>
        Cadastrado em: <Bold>{util.getFormatDate(student.registerDate)}</Bold>
      </CreateAccount>
    </CardStudentWrapper>
  );
};

export default CardStudent;
