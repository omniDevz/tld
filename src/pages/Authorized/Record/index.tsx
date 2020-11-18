import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import PageAuthorized from '../../../components/PageAuthorized';

import { TypesRecord } from './styled';

const Record: React.FC = () => {
  const history = useHistory();

  function handleRedirectToRecordStudent() {
    history.push('/record/student');
  }

  function handleRedirectToRecordRevenue() {
    history.push('/record/revenue');
  }

  return (
    <PageAuthorized type="back" text="Relatórios">
      <TypesRecord>
        <Button onClick={handleRedirectToRecordStudent}>Alunos</Button>
        <Button onClick={handleRedirectToRecordRevenue}>Faturamento</Button>
      </TypesRecord>
    </PageAuthorized>
  );
};

export default Record;
