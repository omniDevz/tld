import React from 'react';

import util from '../../../../../../../utils/util';

import {
  CardRevenueWrapper,
  CreateAccount,
  NameStudent,
  NameCourse,
  SmallText,
  Contact,
  Bold,
} from './styled';

import { ICardRevenue } from './interface';
import mask from '../../../../../../../utils/mask';

const CardRevenue: React.FC<ICardRevenue> = ({ revenue }) => {
  return (
    <CardRevenueWrapper>
      <NameStudent>
        <SmallText>Aluno: </SmallText>
        {revenue.nameStudent}
      </NameStudent>
      <NameCourse>
        <SmallText>Curso: </SmallText>
        {revenue.nameCourse}
      </NameCourse>
      <Contact>{revenue.email}</Contact>
      <Contact>{mask.phoneComplete(revenue.phone)}</Contact>
      <CreateAccount>
        Cadastrado em: <Bold>{util.getFormatDate(revenue.salesDate)}</Bold>
      </CreateAccount>
    </CardRevenueWrapper>
  );
};

export default CardRevenue;
