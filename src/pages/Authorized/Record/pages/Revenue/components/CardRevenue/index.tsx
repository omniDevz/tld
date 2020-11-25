import React from 'react';

import util from '../../../../../../../utils/util';

import {
  CardRevenueWrapper,
  CreateAccount,
  NameStudent,
  NameCourse,
  SmallText,
  Contact,
  Amount,
  Bold,
} from './styled';

import { ICardRevenue } from './interface';
import mask from '../../../../../../../utils/mask';

const CardRevenue: React.FC<ICardRevenue> = ({ revenue }) => {
  const priceCourse =
    revenue.amount === 0 ? 'Grátis' : util.formatPrice(revenue.amount * 100);

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
      <Amount>
        <SmallText>Valor: </SmallText>
        {priceCourse}
      </Amount>
      <CreateAccount>
        Cadastrado em: <Bold>{util.getFormatDate(revenue.salesDate)}</Bold>
      </CreateAccount>
    </CardRevenueWrapper>
  );
};

export default CardRevenue;
