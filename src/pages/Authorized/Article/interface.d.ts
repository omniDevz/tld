export interface IAuthor {
  authorId: number;
  firstName: string;
  lastName: string;
  lastUserUpdate?: number;
}

export interface IAuthorApi {
  autorId: number;
  nome: string;
  sobrenome: string;
  ultimoUsuarioAlteracao?: number;
}

export interface IArticleApi {
  artigoId: number;
  autor: IAuthorApi;
  autorId: number;
  titulo: string;
  subtitulo: string | null;
  quantidadeAcesso: number | null;
  linkArtigo: string;
  dataPublicacao: string | null;
  ultimoUsuarioAlteracao?: number;
}

export interface IArticle {
  articleId: number;
  author: IAuthor;
  authorId: number;
  title: string;
  subtitle: string | null;
  quantityAccess: number | null;
  linkArticle: string;
  publishDate: string | null;
}
