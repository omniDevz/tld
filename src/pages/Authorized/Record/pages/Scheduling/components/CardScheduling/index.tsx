import React from 'react';

import util from '../../../../../../../utils/util';

import { CardSchedulingWrapper, NameScheduling, Contact } from './styled';

import { ICardScheduling } from './interface';

const CardScheduling: React.FC<ICardScheduling> = ({ scheduling }) => {
  return (
    <CardSchedulingWrapper>
      <NameScheduling>
        {util.getFormatDateNameMount(scheduling.dateTime)}
      </NameScheduling>
      <Contact>Aluno: {scheduling.nameStudent}</Contact>
      <Contact>{!scheduling.confirm && `Não`} Confirmado</Contact>
    </CardSchedulingWrapper>
  );
};

export default CardScheduling;
