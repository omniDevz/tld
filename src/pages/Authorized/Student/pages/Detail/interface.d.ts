export interface IParamsStudentDetails {
  studentId: string;
}

export interface IPhone {
  phoneId?: number;
  countryCode: number;
  ddd: number;
  number: number;
  typeFone: string;
}

export interface IPhoneApi {
  telefoneId?: number;
  codigoDiscagem: number;
  ddd: number;
  numeroTelefone: number;
  tipoTelefone: string;
}

export interface IAddress {
  addressId?: number;
  cep: number;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}

export interface IStudentDetailApi {
  pessoa: {
    pessoaId: number;
    nome: string;
    sobrenome: string;
    cpf: string | null;
    dataNascimento: string;
    sexo: string | null;
    telefoneId: number | null;
    telefone: IPhoneApi | null;
    enderecoId: number | null;
    endereco: IAddressApi | null;
    email: string;
    numero: number | null;
  };
  pessoaId: number;
  alunoId: number;
  eAssinante: boolean;
  observacao: string | null;
  ultimoUsuarioAlteracao: number;
}

export interface IStudentDetail {
  firstName: string;
  lastName: string;
  cpf: string | null;
  birthDate: string;
  genre: string | null;
  phoneId: number | null;
  phone: IPhone | null;
  addressId: number | null;
  address: IAddress | null;
  email: string;
  numberAddress: number | null;
  studentId: number;
  premium: boolean;
  lastUserUpdate: number;
}
