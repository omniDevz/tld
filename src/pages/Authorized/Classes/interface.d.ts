export interface ClassProps {
  classId?: string;
  name: string;
  students?: number;
  quizzes?: number;
  description: string;
  code?: string;
}

export interface IClass {
  turmaId: string;
  nome: string;
  descricao: string;
  codigo: string;
}

export interface ClassApiProps {
  turma: IClass;
  quantidadeQuizRealizados: number;
  quantidadeAlunos: number;
  alunos: IStudent[];
}
