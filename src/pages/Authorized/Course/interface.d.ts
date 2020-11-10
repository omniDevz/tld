export interface ICourseApi {
  cursoId: number;
  nome: string;
  descricao: string;
  duracaoMinutos: number;
  eGratuito: boolean;
  valor: number;
  ultimoUsuarioAlteracao: number;
}

export interface ICourse {
  courseId: number;
  name: string;
  description: string;
  durationMinute: number;
  hasFree: boolean;
  price: number;
}
