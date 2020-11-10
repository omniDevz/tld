import { RouteComponentProps } from 'react-router';

export interface ParamsProps {
  idClass: string;
}

export interface StudentProps {
  studentId: string;
  person: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phone: {
      countryCode: number;
      ddd: number;
      number: number;
      typeFone: string;
    } | null;
  };
}

export interface IStudent {
  alunoId: string;
  pessoa: {
    nome: string;
    sobrenome: string;
    dataNascimento: string;
    email: string;
    telefone: {
      codigoDiscagem: number;
      ddd: number;
      numeroTelefone: number;
      tipoTelefone: string;
    } | null;
  };
}
