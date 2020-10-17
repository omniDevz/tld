import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import { Form } from './styled';

import { IStudent, IStudentApi } from './interface';
import util from '../../../utils/util';
import api from '../../../services/api';

const Student: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listStudents, setListStudents] = useState<IStudent[]>([]);

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get('aluno')
      .then(({ data }) => {
        const students = data.map((studentApi: IStudentApi) => {
          const student = {
            email: studentApi.pessoa.email,
            name: `${studentApi.pessoa.nome} ${studentApi.pessoa.sobrenome}`,
            id: studentApi.alunoId,
          } as IStudent;

          return student;
        });

        setListStudents(students);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na remoção de sua conta, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [addToast]);

  function handleFilterStudent(student: IStudent) {
    return util.includesToArray(
      [student.name, student.email, student.phone],
      values.search
    );
  }

  return (
    <PageAuthorized type="back" text="Alunos">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        />
        <Button color="secondary-outline">Filtrar</Button>
      </Form>
      <List list={listStudents.filter(handleFilterStudent)} />
    </PageAuthorized>
  );
};

export default Student;
