export interface ClassProps {
  classId?: string;
  name: string;
  description: string;
  code?: string;
  students?: number;
}

export interface IClassApi {
  turma: {
    turmaId: string;
    nome: string;
    descricao: string;
    codigo: string;
  };
  quantidadeAlunos: number;
  alunos: IStudent[];
}
