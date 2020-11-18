import React, { useState } from 'react';

import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';
import CardStudent from './components/CardStudent';

import {
  RecordStudentWrapper,
  SearchRecord,
  ListStudents,
  Fields,
} from './styled';

const RecordStudent: React.FC = () => {
  const [dateInit, setDateInit] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  return (
    <PageAuthorized type="back" text="Relatório de alunos">
      <RecordStudentWrapper>
        <Fields>
          <FormField
            label="Data inicio"
            name="dateInit"
            value={dateInit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateInit(e.target.value)
            }
          />
          <FormField
            label="Data fim"
            name="dateEnd"
            value={dateEnd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateEnd(e.target.value)
            }
          />
        </Fields>
        <SearchRecord color="secondary">Pesquisar</SearchRecord>
        <ListStudents>
          <CardStudent />
          <CardStudent />
          <CardStudent />
          <CardStudent />
          <CardStudent />
        </ListStudents>
      </RecordStudentWrapper>
    </PageAuthorized>
  );
};

export default RecordStudent;
