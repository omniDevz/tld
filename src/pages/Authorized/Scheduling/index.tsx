import React from 'react';

import PageAuthorized from '../../../components/PageAuthorized';
import Button from '../../../components/Button';

import { SchedulingWrapper, ButtonWrapper } from './styled';

const Scheduling: React.FC = () => {
  return (
    <PageAuthorized type="icon" text="Agendamentos" footer={false}>
      <ButtonWrapper>
        <Button color="secondary-outline">Abrir calendário</Button>
      </ButtonWrapper>
      <SchedulingWrapper></SchedulingWrapper>
    </PageAuthorized>
  );
};

export default Scheduling;
