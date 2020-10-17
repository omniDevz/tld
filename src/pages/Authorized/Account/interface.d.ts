export interface ParamsProps {
  maintainerId: string;
}

export interface AllCountriesProps {
  translations: {
    br: string;
  };
}

export interface AllStatesProps {
  sigla: string;
}

export interface AllCitiesProps {
  nome: string;
}

export interface OptionSelect {
  value: string;
  label: string;
}

export interface OptionsSelect {
  options: OptionSelect[];
}

export interface IPhone {
  foneId?: number;
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

export interface IAddressApi {
  enderecoId?: number;
  cep: number;
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
}

export interface IPersonApi {
  pessoaId: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  telefoneId?: number | null;
  telefone: IPhoneApi | null;
  enderecoId?: number | null;
  endereco: IAddressApi | null;
  email: string;
  numero: number | null;
  usuario: string;
  senha: string;
  ultimoUsuarioAlteracao?: number;
}

export interface IAdministratorApi {
  administradorId: number;
  pessoa: IPersonApi;
  pessoaId: number;
  nivelAcesso: number;
}

export interface ITeacherApi {
  professorId: number;
  ultimoUsuarioAlteracao: number;
  administrador: IAdministratorApi;
}

export interface IPerson {
  personId: number;
  firstName: string;
  lastName: string;
  cpf: string;
  dateBirth: string;
  genre: string;
  phoneId: number | null;
  phone: IPhone | null;
  addressId: number | null;
  address: IAddress | null;
  email: string;
  number: number | null;
  username: string;
  password: string;
}
