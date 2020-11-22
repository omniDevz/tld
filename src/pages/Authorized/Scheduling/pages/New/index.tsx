import React from 'react';
import { useParams } from 'react-router-dom';
import PageAuthorized from '../../../../../components/PageAuthorized';

import util from '../../../../../utils/util';

import { SchedulingNewWrapper, DateCreate } from './styled';

import { INewSchedulingParams } from './interface';

const SchedulingNew: React.FC = () => {
  const { date } = useParams<INewSchedulingParams>();

  return (
    <PageAuthorized type="back" text="Novo agendamento">
      <SchedulingNewWrapper>
        <DateCreate>{util.getFormatDateNameMount(date)}</DateCreate>
      </SchedulingNewWrapper>
    </PageAuthorized>
  );
};

export default SchedulingNew;
