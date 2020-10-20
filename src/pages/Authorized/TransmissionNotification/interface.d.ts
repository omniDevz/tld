export interface ITransmissionNotificationApi {
  notificacaoTransmissaoId: number;
  descricao: string;
  link: string;
  ultimoUsuarioAlteracao?: number;
}

export interface ITransmissionNotification {
  TransmissionNotificationId: number;
  description: string;
  link: string;
}
