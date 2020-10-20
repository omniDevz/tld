export interface IConsultingTypeApi {
  tipoConsultoriaId: number;
  descricao: string;
  inativo: boolean;
  ultimoUsuarioAlteracao: number;
}

export interface IConsultingType {
  consultingTypeId: number;
  description: string;
  inactive?: boolean;
}
