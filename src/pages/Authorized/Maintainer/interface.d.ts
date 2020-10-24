export interface IAdminApi {
  administradorId: number;
  pessoa: {
    nome: string;
    sobrenome: string;
    email: string;
  };
  nivelAcesso: string;
}

export interface ITeacherApi {
  administradorId: number;
  professorId: number;
  administrador: IAdminApi;
}


export interface IMaintainer {
  adminId: number;
  teacherId: number;
  name: string;
  email: string;
  levelAccess: number;
}
