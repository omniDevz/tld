export interface IAuthor {
  authorId: number;
  inactive: boolean;
  firstName: string;
  lastName: string;
  lastUserUpdate: number;
}

export interface IAuthorApi {
  autorId: number;
  inativo: boolean;
  nome: string;
  sobrenome: string;
  ultimoUsuarioAlteracao: number;
}
