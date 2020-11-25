export interface IRecordSchedulingApi {
  agendamentoId: number;
  dataHora: string;
  nomeAluno: string;
  confirmado: boolean;
}

export interface IRecordScheduling {
  schedulingId: number;
  dateTime: string;
  nameStudent: string;
  confirm: boolean;
}
