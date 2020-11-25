import React, { useState } from 'react';
import CheckButton from '../../../../../components/CheckButton';

import {
  OptionsContainer,
  StatusContainer,
  DayItemWrapper,
  RemoveSchedule,
  EditSchedule,
  Description,
  Hour,
} from './styled';

const DayItem: React.FC = () => {
  const [open, setOpen] = useState(false);

  function handleOpenOptionsDay() {
    setOpen(!open);
  }

  return (
    <DayItemWrapper open={open}>
      <Description onClick={handleOpenOptionsDay}>
        Nome do agendamento
      </Description>
      <Hour onClick={handleOpenOptionsDay}>10:00</Hour>
      <StatusContainer>
        <CheckButton
          label="Confirmado"
          name="confirm"
          setValue={() => {}}
          value={true}
        />
        <CheckButton
          label="Realizado"
          name="realized"
          setValue={() => {}}
          value={false}
        />
        <OptionsContainer>
          <EditSchedule />
          <RemoveSchedule />
        </OptionsContainer>
      </StatusContainer>
    </DayItemWrapper>
  );
};

export default DayItem;
