export interface ISchedulingParams {
  idScheduling: string;
}

export interface IStudentApi {
  alunoId: number;
  pessoa: {
    nome: string;
    sobrenome: string;
  };
}

export interface IStudent {
  studentId: number;
  name: string;
}

export interface ITypeConsultingApi {
  tipoConsultoriaId: number;
  descricao: string;
}

export interface ITypeConsulting {
  typeConsultingId: number;
  description: string;
}
