import React from 'react';
import { Link } from 'react-router-dom';

import PageAuthorized from '../../../components/PageAuthorized';
import Button from '../../../components/Button';
import Day from './components/Day';

import util from '../../../utils/util';

import {
  SchedulingWrapper,
  ButtonWrapper,
  MoreToday,
  ListDays,
  Header,
  Today,
} from './styled';

const Scheduling: React.FC = () => {
  return (
    <PageAuthorized type="back" text="Agendamentos" footer={false}>
      <ButtonWrapper>
        <Button color="secondary-outline">Abrir calendário</Button>
      </ButtonWrapper>
      <SchedulingWrapper>
        <Header>
          <Today>{util.getFormatDateNameMountNow()}</Today>
          <Link
            to={`/scheduling/new/${util.getFormatDateApi(
              new Date().toString(),
              '-'
            )}`}
            title="Novo agendamento"
          >
            <MoreToday />
          </Link>
        </Header>
        <ListDays>
          <Day />
          <Day />
        </ListDays>
      </SchedulingWrapper>
    </PageAuthorized>
  );
};

export default Scheduling;
