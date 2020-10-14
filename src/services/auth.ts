import api from './api';
import {
  IResponseAdministrator,
  IResponseTeacher,
  AddressProps,
  PhoneProps,
  UserProps,
} from './interface';

export async function signIn(
  username: string,
  password: string,
  levelAccess: number
): Promise<UserProps> {
  const levelInApi = levelAccess === 1 ? 'Administrador' : 'Professor';

  async function loginTeacher() {
    const response: IResponseTeacher = await api.post(
      `/${levelInApi}/ValidarLogin${levelInApi}`,
      {
        usuario: username,
        senha: password,
      }
    );

    if (response.status !== 200) {
      return {
        status: response.status,
      } as UserProps;
    }

    const { pessoa } = response.data.usuario.administrador;

    return {
      adminId: response.data.usuario.administradorId,
      teacherId: levelAccess === 1 ? 0 : response.data.usuario.professorId,
      firstName: pessoa.nome,
      lastName: pessoa.sobrenome,
      cpf: pessoa.cpf,
      dateOfBirth: pessoa.dataNascimento,
      genre: pessoa.sexo,
      email: pessoa.email,
      number: pessoa.numero,
      username: pessoa.usuario,
      phone: (!!pessoa.telefone
        ? {
            phoneId: pessoa.telefoneId,
            countryCode: pessoa.telefone.CodigoDiscagem,
            ddd: pessoa.telefone.NumeroTelefone,
            number: pessoa.telefone.NumeroTelefone,
            typeFone: pessoa.telefone.TipoTelefone,
          }
        : {}) as PhoneProps,
      address: (!!pessoa.endereco
        ? {
            addressId: pessoa.enderecoId,
            cep: pessoa.endereco.Cep,
            address: pessoa.endereco.Logradouro,
            neighborhood: pessoa.endereco.Bairro,
            city: pessoa.endereco.Cidade,
            state: pessoa.endereco.Estado,
            country: pessoa.endereco.Pais,
          }
        : {}) as AddressProps,
      token: response.data.token,
      dateExpires: response.data.dataExpiracao,
      status: response.status,
    } as UserProps;
  }

  async function loginAdministrator() {
    const response: IResponseAdministrator = await api.post(
      `/${levelInApi}/ValidarLogin${levelInApi}`,
      {
        usuario: username,
        senha: password,
      }
    );

    if (response.status !== 200) {
      return {
        status: response.status,
      } as UserProps;
    }

    const { pessoa } = response.data.usuario;

    return {
      adminId: response.data.usuario.administradorId,
      teacherId: -1,
      firstName: pessoa.nome,
      lastName: pessoa.sobrenome,
      cpf: pessoa.cpf,
      dateOfBirth: pessoa.dataNascimento,
      genre: pessoa.sexo,
      email: pessoa.email,
      number: pessoa.numero,
      username: pessoa.usuario,
      phone: (!!pessoa.telefone
        ? {
            phoneId: pessoa.telefoneId,
            countryCode: pessoa.telefone.CodigoDiscagem,
            ddd: pessoa.telefone.NumeroTelefone,
            number: pessoa.telefone.NumeroTelefone,
            typeFone: pessoa.telefone.TipoTelefone,
          }
        : {}) as PhoneProps,
      address: (!!pessoa.endereco
        ? {
            addressId: pessoa.enderecoId,
            cep: pessoa.endereco.Cep,
            address: pessoa.endereco.Logradouro,
            neighborhood: pessoa.endereco.Bairro,
            city: pessoa.endereco.Cidade,
            state: pessoa.endereco.Estado,
            country: pessoa.endereco.Pais,
          }
        : {}) as AddressProps,
      token: response.data.token,
      dateExpires: response.data.dataExpiracao,
      status: response.status,
    } as UserProps;
  }

  const user =
    levelAccess === 1 ? await loginAdministrator() : await loginTeacher();

  return user;
}
