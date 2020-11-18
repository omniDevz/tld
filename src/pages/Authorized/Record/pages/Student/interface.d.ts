export interface IRecordStudentApi {
  alunoId: number;
  nomeAluno: string;
  emailAluno: string;
  numeroTelefone: string;
  dataHoraCadastro: string;
}

export interface IRecordStudent {
  studentId: number;
  nameStudent: string;
  emailStudent: string;
  phone: string;
  registerDate: string;
}
