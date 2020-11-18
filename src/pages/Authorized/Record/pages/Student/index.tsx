import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';
import api from '../../../../../services/api';
import CardStudent from './components/CardStudent';

import util from '../../../../../utils/util';

import {
  RecordStudentWrapper,
  SearchRecord,
  ListStudents,
  Fields,
} from './styled';

import { IRecordStudentApi, IRecordStudent } from './interface';

const RecordStudent: React.FC = () => {
  const [listStudents, setListStudents] = useState<IRecordStudent[]>([]);
  const [dateInit, setDateInit] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const { addToast } = useToasts();

  const handlePressEnterAction = () => {
    if (!dateInit.length) {
      util.onFocus('id_dateInit');
      return;
    }

    if (!dateEnd.length) {
      util.onFocus('id_dateEnd');
      return;
    }

    handleSearchRecordStudent();
  };

  const handleSearchRecordStudent = () => {
    api
      .get(`vwAlunosMatriculados/dataInicio=${dateInit}&dataFim=${dateEnd}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const studentsApi: IRecordStudentApi[] = response.data;

        const students = studentsApi.map((studentApi) => {
          const student: IRecordStudent = {
            emailStudent: studentApi.emailAluno,
            nameStudent: studentApi.nomeAluno,
            phone: studentApi.numeroTelefone,
            registerDate: studentApi.dataHoraCadastro,
            studentId: studentApi.alunoId,
          };

          return student;
        });

        setListStudents([...students]);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca do relatório, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  };

  return (
    <PageAuthorized type="back" text="Relatório de alunos">
      <RecordStudentWrapper>
        <Fields>
          <FormField
            label="Data começo"
            name="dateInit"
            value={dateInit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateInit(e.target.value)
            }
            type="date"
            handleListInPressKey={[
              {
                handleFunction: handlePressEnterAction,
                key: 'Enter',
              },
            ]}
          />
          <FormField
            label="Data termino"
            name="dateEnd"
            value={dateEnd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateEnd(e.target.value)
            }
            type="date"
            handleListInPressKey={[
              {
                handleFunction: handlePressEnterAction,
                key: 'Enter',
              },
            ]}
          />
        </Fields>
        <SearchRecord color="secondary" onClick={handleSearchRecordStudent}>
          Pesquisar
        </SearchRecord>
        <ListStudents>
          {!!listStudents &&
            listStudents.map((student) => (
              <CardStudent key={student.studentId} student={student} />
            ))}
        </ListStudents>
      </RecordStudentWrapper>
    </PageAuthorized>
  );
};

export default RecordStudent;
