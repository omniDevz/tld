import React from 'react';

import { DayItemWrapper, Description, Hour } from './styled';

const DayItem: React.FC = () => {
  return (
    <DayItemWrapper>
      <Description>Nome do agendamento</Description>
      <Hour>10:00</Hour>
    </DayItemWrapper>
  );
};

export default DayItem;
