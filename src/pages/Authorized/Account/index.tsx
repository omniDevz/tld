import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import Collapse from '../../../components/Collapse';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import RadioButton from '../../../components/RadioButton';
import Select from '../../../components/Select';

import util from '../../../utils/util';

import api, {
  apiCountries,
  apiLocations,
  apiViaCep,
} from '../../../services/api';

import {
  ButtonsWrapper,
  HalfContainer,
  CEPContainer,
  ThreeFields,
  LevelAccess,
  TwoFields,
  Fieldset,
  Form,
} from './styled';

import {
  AllCountriesProps,
  IAdministratorApi,
  AllCitiesProps,
  AllStatesProps,
  OptionsSelect,
  ITeacherApi,
  IPersonApi,
} from './interface';

import { useAuth } from '../../../contexts/auth';
import mask from '../../../utils/mask';
import validation from '../../../utils/validation';

const Account: React.FC = () => {
  const [personId, setPersonId] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [genre, setGenre] = useState('M');
  const [email, setEmail] = useState('');
  const [typePhone, setTypePhone] = useState('F');
  const [countryCode, setCountryCode] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordBack, setPasswordBack] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [levelAccess, setLevelAccess] = useState(0);

  const [countries, setCountries] = useState<OptionsSelect>({
    options: [
      {
        label: '',
        value: '',
      },
    ],
  });

  const [states, setStates] = useState<OptionsSelect>({
    options: [
      {
        label: '',
        value: '',
      },
    ],
  });

  const [cities, setCities] = useState<OptionsSelect>({
    options: [
      {
        label: '',
        value: '',
      },
    ],
  });

  const { addToast } = useToasts();

  const { user, signOut } = useAuth();

  function handleCep() {
    if (cep.length < 8) {
      alert('Informe o CEP corretamente');
      return null;
    }

    apiViaCep
      .get(`/${cep.replace('-', '')}/json`)
      .then(({ data }) => {
        if (data.erro) {
          alert('Confirme o campo de cep, algo está incorreto');
          return null;
        }

        const { uf, localidade, bairro, logradouro } = data;

        setCountry('Brasil');

        setState(uf);
        if (!util.emptyValue(uf, 'id_state')) return null;

        setCity(localidade);
        if (!util.emptyValue(localidade, 'id_city')) return null;

        setNeighborhood(bairro);
        if (!util.emptyValue(bairro, 'id_neighborhood')) return null;

        setAddress(logradouro);
        if (!util.emptyValue(logradouro, 'id_address')) return null;

        document.getElementById('id_numberAddress')?.focus();
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por CEP, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(() => {
    apiCountries
      .get('')
      .then(({ data }) => {
        const optionsCountries = data.map((country: AllCountriesProps) => {
          const optionsNameCountryInPortugueseBr = {
            value: country.translations.br,
            label: country.translations.br,
          };
          return optionsNameCountryInPortugueseBr;
        });
        setCountries({
          options: optionsCountries,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca de países, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [addToast]);

  useEffect(() => {
    if (country !== 'Brasil') return;

    apiLocations
      .get('/estados')
      .then(({ data }) => {
        const optionsStates = data.map((state: AllStatesProps) => {
          const optionsNameStates = {
            value: state.sigla,
            label: state.sigla,
          };

          return optionsNameStates;
        });

        setStates({
          options: optionsStates,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca de estados, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [country, addToast]);

  useEffect(() => {
    if (country !== 'Brasil') return;

    apiLocations
      .get(`/estados/${state}/municipios`)
      .then(({ data }) => {
        const optionsCities = data.map((city: AllCitiesProps) => {
          const optionsNameCity = {
            value: city.nome,
            label: city.nome,
          };

          return optionsNameCity;
        });

        setCities({
          options: optionsCities,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca de munícipios, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [state, country, addToast]);

  function handleSetPersonByApi(person: IPersonApi) {
    setPersonId(person.pessoaId);
    setFirstName(person.nome);
    setLastName(person.sobrenome);
    setCpf(mask.cpf(person.cpf));
    setBirthDate(util.removeHoursDateTimeApi(person.dataNascimento));
    setGenre(person.sexo);
    setEmail(person.email);

    if (person.telefone) {
      const { telefone: phone } = person;
      setTypePhone(phone.tipoTelefone);
      setCountryCode(String(phone.codigoDiscagem));
      setDdd(String(phone.ddd));
      setPhone(String(phone.numeroTelefone));
    }

    if (person.endereco) {
      const { endereco: addressApi } = person;

      setCep(String(addressApi.cep));
      setAddress(addressApi.logradouro);
      setNeighborhood(addressApi.bairro);
      setCity(addressApi.cidade);
      setState(addressApi.estado);
      setCountry(addressApi.pais);
      setNumberAddress(String(person.numero));
    }

    setUsername(person.usuario);
    setPasswordBack(person.senha);
  }

  function functionTeacherOrAdministrator(
    functionTeacher: () => void,
    functionAdministrator: () => void
  ) {
    if ((user?.levelAccess || 0) < 2) functionAdministrator();
    else functionTeacher();
  }

  useEffect(() => {
    if (!user) return;

    function getDataAdministrator() {
      api
        .get(`/administrador/${user?.adminId}`)
        .then(({ data }) => {
          const userApi = data as IAdministratorApi;

          handleSetPersonByApi(userApi.pessoa);
          setLevelAccess(userApi.nivelAcesso);
        })
        .catch((err) => {
          console.log(err);
          addToast(
            'Houve algum erro inesperado ao obter seus dados, tente novamente mais tarde',
            {
              appearance: 'error',
              autoDismiss: true,
            }
          );
        });
    }

    function getDataTeacher() {
      api
        .get(`/professor/${user?.teacherId}`)
        .then(({ data }) => {
          const userApi = data as ITeacherApi;

          handleSetPersonByApi(userApi.administrador.pessoa);
          setLevelAccess(userApi.administrador.nivelAcesso);
        })
        .catch((err) => {
          console.log(err);
          addToast(
            'Houve algum erro inesperado ao obter seus dados, tente novamente mais tarde',
            {
              appearance: 'error',
              autoDismiss: true,
            }
          );
        });
    }

    if ((user?.levelAccess || 0) < 2) getDataAdministrator();
    else getDataTeacher();
  }, [addToast, user]);

  function handleInstancePersonChangeApi() {
    const applySetPhone =
      countryCode.length > 0 &&
      typePhone.length > 0 &&
      ddd.length > 0 &&
      phone.length > 0;

    const applySetAddress =
      cep.length > 0 &&
      country.length > 0 &&
      state.length > 0 &&
      city.length > 0 &&
      address.length > 0 &&
      numberAddress.length > 0;

    const personApi = {
      pessoaId: personId,
      nome: firstName,
      sobrenome: lastName,
      cpf: util.onlyNumbers(cpf),
      dataNascimento: birthDate,
      sexo: genre,
      email: email,
      telefone: applySetPhone
        ? {
            codigoDiscagem: Number(countryCode),
            ddd: Number(ddd),
            numeroTelefone: Number(phone),
            tipoTelefone: typePhone,
          }
        : null,
      endereco: applySetAddress
        ? {
            cep: Number(cep),
            logradouro: address,
            bairro: neighborhood,
            cidade: city,
            estado: state,
            pais: country,
          }
        : null,
      numero: Number(numberAddress),
      usuario: username,
      senha: password === '' ? passwordBack : password,
      ultimoUsuarioAlteracao: user?.adminId,
    } as IPersonApi;

    return personApi;
  }

  function handleUpdateTeacher() {
    api
      .put('professor', {
        professorId: user?.teacherId,
        ultimoUsuarioAlteracao: user?.personId,
        administrador: {
          administradorId: user?.adminId,
          nivelAcesso: user?.levelAccess,
          ultimoUsuarioAlteracao: user?.personId,
          pessoa: handleInstancePersonChangeApi(),
        },
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Dados do perfil alterado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na atualização do professor, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleUpdateAdministrator() {
    api
      .put('/administrador/', {
        administradorId: user?.adminId,
        nivelAcesso: user?.levelAccess,
        ultimoUsuarioAlteracao: user?.personId,
        pessoa: handleInstancePersonChangeApi(),
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return null;
        }

        addToast('Dados do perfil alterado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na atualização do administrador, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleUpdate() {
    if (!util.emptyValue(firstName, 'id_firstName')) {
      addToast('Preencha o primeiro nome', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return;
    }
    if (!util.emptyValue(lastName, 'id_lastName')) {
      addToast('Preencha o sobrenome', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return;
    }
    if (!util.emptyValue(birthDate, 'id_birthDate')) {
      addToast('Preencha a data de aniversário', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return;
    }
    if (!validation.dateMinToDay(birthDate)) {
      addToast('A data deve ser inferior ao dia de hoje', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_birthDate')?.focus();
      return;
    }
    if (!util.emptyValue(email, 'id_email')) {
      addToast('Preencha o e-mail', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return;
    }
    if (!validation.email(email)) {
      addToast('Preencha o e-mail corretamente', {
        appearance: 'warning',
        autoDismiss: true,
      });
      util.onFocus('id_email');
      return;
    }
    if (!util.emptyValue(username, 'id_username')) {
      addToast('Preencha o nome de usuário', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return;
    }

    const hasChangePassword =
      passwordNew.length > 0 || passwordConfirm.length > 0;
    const differenceInNewPassword = passwordNew !== passwordConfirm;
    const differenceInOldPassword = password !== passwordBack;

    if (hasChangePassword && differenceInOldPassword) {
      addToast('Informe sua senha se acesso corretamente', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_password')?.focus();

      return;
    }

    if (hasChangePassword && differenceInNewPassword) {
      addToast('A nova senha e a confirmação deve ser igual', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_passwordNew')?.focus();

      return;
    }

    functionTeacherOrAdministrator(
      handleUpdateTeacher,
      handleUpdateAdministrator
    );
  }

  function handleDeleteTeacher() {
    api
      .delete(`/professor/${user?.teacherId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return null;
        }

        addToast('Sua conta foi removida com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });

        signOut();
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na remoção de sua conta, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleDeleteAdministrator() {
    api
      .delete(`administrador/${user?.adminId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return null;
        }

        addToast('Sua conta foi removida com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });

        signOut();
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na remoção de sua conta, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleDelete() {
    if (!window.confirm('Realmente deseja remover sua conta?')) {
      return;
    }

    functionTeacherOrAdministrator(
      handleDeleteTeacher,
      handleDeleteAdministrator
    );
  }

  return (
    <PageAuthorized type="back" text="Meu perfil">
      <Form>
        <LevelAccess>
          Nível de acesso:
          <b>{levelAccess < 2 ? 'Administrador' : 'Professor'}</b>
        </LevelAccess>
        <Collapse label="Dados pessoais">
          <Fieldset>
            <TwoFields>
              <FormField
                label="Nome"
                name="firstName"
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
              />
              <FormField
                label="Sobrenome"
                name="lastName"
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
              />
            </TwoFields>
            <TwoFields>
              <FormField
                label="CPF"
                name="cpf"
                value={cpf}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCpf(mask.cpf(e.target.value))
                }
              />
              <FormField
                label="Data nascimento"
                name="birthDate"
                value={birthDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setBirthDate(e.target.value)
                }
                type="date"
              />
            </TwoFields>
            <RadioButton
              options={[
                {
                  label: 'Masculino',
                  value: 'M',
                },
                {
                  label: 'Feminino',
                  value: 'F',
                },
                {
                  label: 'Outro',
                  value: 'O',
                },
              ]}
              name="genre"
              value={genre}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGenre(e.target.value)
              }
            />
            <FormField
              label="E-mail"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </Fieldset>
        </Collapse>
        <Collapse label="Telefone">
          <Fieldset>
            <HalfContainer>
              <RadioButton
                options={[
                  {
                    label: 'Fixo',
                    value: 'F',
                  },
                  {
                    label: 'Celular',
                    value: 'C',
                  },
                ]}
                name="typePhone"
                value={typePhone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTypePhone(e.target.value)
                }
              />
            </HalfContainer>
            <ThreeFields>
              <FormField
                label=""
                name="countryCode"
                value={countryCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCountryCode(e.target.value)
                }
                prefix="+"
              />
              <FormField
                label=""
                name="ddd"
                value={ddd}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDdd(e.target.value)
                }
                prefix="0"
              />
              <FormField
                label="Número"
                name="number"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              />
            </ThreeFields>
          </Fieldset>
        </Collapse>
        <Collapse label="Endereço">
          <Fieldset>
            <CEPContainer>
              <FormField
                label="CEP"
                name="cep"
                value={cep}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCep(e.target.value)
                }
              />
              <Button color="secondary" onClick={handleCep}>
                Buscar
              </Button>
            </CEPContainer>
            <TwoFields>
              <Select
                label="País"
                name="country"
                onChange={(e: any) => setCountry(e.value)}
                value={country}
                options={countries.options}
              />
              {country === 'Brasil' ? (
                <Select
                  label="UF"
                  name="state"
                  onChange={(e: any) => setState(e.value)}
                  value={state}
                  options={states.options}
                />
              ) : (
                <FormField
                  label="UF"
                  name="state"
                  value={state}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                  }
                />
              )}
            </TwoFields>
            {country === 'Brasil' ? (
              <Select
                name="city"
                label="Cidade"
                onChange={(e: any) => setCity(e.value)}
                value={city}
                options={cities.options}
              />
            ) : (
              <FormField
                label="Cidade"
                name="city"
                value={city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
              />
            )}
            <FormField
              label="Bairro"
              name="neighborhood"
              value={neighborhood}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNeighborhood(e.target.value)
              }
            />
            <TwoFields>
              <FormField
                label="Endereço"
                name="address"
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
              />
              <FormField
                label="Nº"
                name="numberAddress"
                value={numberAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberAddress(e.target.value)
                }
              />
            </TwoFields>
          </Fieldset>
        </Collapse>

        <Collapse label="Dados de acesso">
          <Fieldset>
            <FormField
              label="Usuário"
              name="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />

            <FormField
              label="Senha atual"
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              type="password"
            />
            <FormField
              label="Nova senha"
              name="passwordNew"
              value={passwordNew}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordNew(e.target.value)
              }
              type="password"
            />
            <FormField
              label="Confirmar senha"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirm(e.target.value)
              }
              type="password"
            />
          </Fieldset>
        </Collapse>
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDelete}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleUpdate}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default Account;
