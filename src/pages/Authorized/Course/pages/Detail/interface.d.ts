import { ICourse, ICourseApi } from "../../interface";

export interface ICourseDetailParams {
  idCourse: string;
}

export interface IClassApi {
  aulaId: number;
  cursoId: number;
  nome: string;
  descricao: string;
  linkVideo: string;
  numeroAula: number;
  duracaoMinutos: number;
  ultimoUsuarioAlteracao: number;
  inativo: boolean;
}

export interface IClass {
  classId: number;
  courseId: number;
  name: string;
  description: string;
  link: string;
  numberClass: number;
  timeMinutes: number;
}

export interface ICourseDetail extends ICourse {
  class?: Array<IClass>;
}

export interface ICourseApiDetail extends ICourseApi {
  aulas: Array<IClassApi>;
}
