export interface IPhoneApi {
  telefoneId?: number;
  codigoDiscagem: number;
  ddd: number;
  tipoTelefone: number;
  numeroTelefone: number;
}

export interface IStudentApi {
  alunoId: number;
  pessoaId: number;
  pessoa: {
    nome: string;
    sobrenome: string;
    email: string;
    telefone: IPhoneApi | null;
  };
}

export interface IStudent {
  id: number;
  name: string;
  email: string;
  phone: string;
}
