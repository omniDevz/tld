export interface IMaintainerApi {
  administradorId: number;
  pessoa: {
    nome: string;
    sobrenome: string;
    email: string;
  };
  nivelAcesso: string;
}

export interface IMaintainer {
  adminId: number;
  name: string;
  email: string;
  levelAccess: number;
}
