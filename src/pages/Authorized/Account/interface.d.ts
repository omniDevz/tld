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

export interface IPersonApi {
  pessoaId: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  sexo: string;
  telefoneId: number | null;
  telefone: object | null;
  enderecoId: number | null;
  endereco: object | null;
  email: string;
  numero: number | null;
  usuario: string;
  senha: string;
}

export interface IAdministratorApi {
  administradorId: number;
  pessoa: IPersonApi;
  pessoaId: number;
  nivelAcesso: number;
}

export interface IPerson {
  personId: number;
  firstName: string;
  lastName: string;
  cpf: string;
  dateBirth: string;
  genre: string;
  phoneId: number | null;
  phone: object | null;
  addressId: number | null;
  address: object | null;
  email: string;
  number: number | null;
  username: string;
  password: string;
}
