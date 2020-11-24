import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useParams } from 'react-router-dom';

import PageAuthorized from '../../../../../components/PageAuthorized';
import CheckButton from '../../../../../components/CheckButton';
import FormField from '../../../../../components/FormField';
import Button from '../../../../../components/Button';
import Select from '../../../../../components/Select';

import api from '../../../../../services/api';
import util from '../../../../../utils/util';

import {
  SchedulingEditWrapper,
  Description,
  DateCreate,
  Fields,
  Hours,
} from './styled';

import {
  ITypeConsultingApi,
  ISchedulingParams,
  ITypeConsulting,
  IStudentApi,
  IStudent,
} from './interface';

const SchedulingEdit: React.FC = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [description, setDescription] = useState('');
  const [student, setStudent] = useState('');
  const [listStudents, setListStudents] = useState<IStudent[]>([]);
  const [typeConsulting, setTypeConsulting] = useState('');
  const [listTypeConsulting, setListTypeConsulting] = useState<
    ITypeConsulting[]
  >([]);
  const [observations, setObservations] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [realized, setRealized] = useState(false);

  const { addToast } = useToasts();
  const { idScheduling } = useParams<ISchedulingParams>();

  console.log(idScheduling);

  function handleGetStudents() {
    api
      .get('aluno')
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            autoDismiss: true,
            appearance: 'warning',
          });
          return;
        }

        const studentsApi: IStudentApi[] = response.data;

        const students = studentsApi.map((studentApi) => {
          const student: IStudent = {
            name: studentApi.pessoa.nome.concat(
              ' ',
              studentApi.pessoa.sobrenome
            ),
            studentId: studentApi.alunoId,
          };

          return student;
        });

        setListStudents(students);
      })
      .catch((error) => {
        console.error(error);
        addToast(
          'Houve um erro ao obter a lista de alunos, tente novamente mais tarde',
          {
            autoDismiss: true,
            appearance: 'warning',
          }
        );
      });
  }

  useEffect(handleGetStudents, []);

  function handleGetTypeConsulting() {
    api
      .get('tipoConsultoria')
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            autoDismiss: true,
            appearance: 'warning',
          });
          return;
        }

        const typeConsultingApi: ITypeConsultingApi[] = response.data;

        const typeConsulting = typeConsultingApi.map((typeConsultingApi) => {
          const typeConsulting: ITypeConsulting = {
            description: typeConsultingApi.descricao,
            typeConsultingId: typeConsultingApi.tipoConsultoriaId,
          };

          return typeConsulting;
        });

        setListTypeConsulting(typeConsulting);
      })
      .catch((error) => {
        console.error(error);
        addToast(
          'Houve um erro ao obter a lista de alunos, tente novamente mais tarde',
          {
            autoDismiss: true,
            appearance: 'warning',
          }
        );
      });
  }

  useEffect(handleGetTypeConsulting, []);

  return (
    <PageAuthorized type="back" text="Novo agendamento">
      <SchedulingEditWrapper>
        <DateCreate>
          {util.getFormatDateNameMount(new Date().toUTCString())}
        </DateCreate>
        <Fields>
          <Hours>
            <Description>Hora do agendamento</Description>
            <FormField
              label=""
              name="hours"
              value={hours}
              maxlength={2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setHours(e.target.value)
              }
            />
            :
            <FormField
              label=""
              name="minutes"
              value={minutes}
              maxlength={2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinutes(e.target.value)
              }
            />
          </Hours>
          <FormField
            label="Descrição"
            name="description"
            value={description}
            maxlength={100}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
          <Select
            label="Aluno"
            name="student"
            options={listStudents.map((s) => {
              return {
                value: String(s.studentId),
                label: s.name,
              };
            })}
            value={student}
            onChange={setStudent}
          />
          <Select
            label="Tipo de consultoria"
            name="typeConsulting"
            options={listTypeConsulting.map((type) => {
              return {
                value: String(type.typeConsultingId),
                label: type.description,
              };
            })}
            value={typeConsulting}
            onChange={setTypeConsulting}
          />
          <FormField
            label="Observações"
            name="observations"
            value={observations}
            maxlength={100}
            type="textarea"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObservations(e.target.value)
            }
          />
          <CheckButton
            label="Confirmado"
            name="confirmation"
            setValue={setConfirmation}
            value={confirmation}
          />
          <CheckButton
            label="Realizado"
            name="realized"
            setValue={setRealized}
            value={realized}
          />
        </Fields>
        <Button>Salvar</Button>
      </SchedulingEditWrapper>
    </PageAuthorized>
  );
};

export default SchedulingEdit;
