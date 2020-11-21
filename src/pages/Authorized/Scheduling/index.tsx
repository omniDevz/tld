import React from 'react';

import PageAuthorized from '../../../components/PageAuthorized';
import Button from '../../../components/Button';

import {
  SchedulingWrapper,
  ButtonWrapper,
  MoreToday,
  Header,
  Today,
} from './styled';

const Scheduling: React.FC = () => {
  return (
    <PageAuthorized type="icon" text="Agendamentos" footer={false}>
      <ButtonWrapper>
        <Button color="secondary-outline">Abrir calendário</Button>
      </ButtonWrapper>
      <SchedulingWrapper>
        <Header>
          <Today>09 de Junho de 2020</Today>
          <MoreToday />
        </Header>
      </SchedulingWrapper>
    </PageAuthorized>
  );
};

export default Scheduling;
