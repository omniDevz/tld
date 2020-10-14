export interface ITelefone {
  telefoneId: number | null;
  CodigoDiscagem: number;
  Ddd: number;
  NumeroTelefone: number;
  TipoTelefone: string;
}

export interface IEndereco {
  enderecoId: number | null;
  Cep: number;
  Logradouro: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
  Pais: string;
}

export interface IPessoa {
  pessoaId: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  email: string;
  numero: number;
  usuario: string;
  token: string | null;
  dataExpiracao: string | null;
  telefoneId: number | null;
  telefone: ITelefone | null;
  enderecoId: number | null;
  endereco: IEndereco | null;
  ultimoUsuarioAlteracao: number;
}

export interface IAdministrador {
  administradorId: number;
  pessoaId: number;
  pessoa: IPessoa;
  nivelAcesso: number;
  ultimoUsuarioAlteracao: number;
}

export interface IUser {
  administrador: IAdministrador;
  administradorId: number;
  professorId: number;
  ultimoUsuarioAlteracao: number;
}

export interface IResponseTeacher {
  data: {
    usuario: IUser;
    token: string;
    dataExpiracao: string;
  };
  status: number;
}

export interface IResponseAdministrator {
  data: {
    usuario: IAdministrador;
    token: string;
    dataExpiracao: string;
  };
  status: number;
}

export interface PhoneProps {
  phoneId: number;
  countryCode: number;
  ddd: number;
  number: number;
  typeFone: string;
}

export interface AddressProps {
  addressId: number;
  cep: number;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}

export interface UserProps {
  adminId: number;
  teacherId: number;
  firstName: string;
  lastName: string;
  cpf: string;
  dateOfBirth: string;
  genre: string;
  email: string;
  number: number;
  username: string;
  phone: PhoneProps | null;
  address: AddressProps | null;
  token: string;
  dateExpires: string;
  status: number;
}
