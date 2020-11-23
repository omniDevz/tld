import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useParams } from 'react-router-dom';

import PageAuthorized from '../../../../../components/PageAuthorized';
import FormField from '../../../../../components/FormField';
import Button from '../../../../../components/Button';

import api from '../../../../../services/api';
import util from '../../../../../utils/util';

import {
  SchedulingNewWrapper,
  Description,
  DateCreate,
  Fields,
  Hours,
} from './styled';

import {
  INewSchedulingParams,
  ITypeConsultingApi,
  ITypeConsulting,
  IStudentApi,
  IStudent,
} from './interface';
import Select from '../../../../../components/Select';

const SchedulingNew: React.FC = () => {
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

  const { date } = useParams<INewSchedulingParams>();
  const { addToast } = useToasts();

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
      <SchedulingNewWrapper>
        <DateCreate>{util.getFormatDateNameMount(date)}</DateCreate>
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
        </Fields>
        <Button>Salvar</Button>
      </SchedulingNewWrapper>
    </PageAuthorized>
  );
};

export default SchedulingNew;
