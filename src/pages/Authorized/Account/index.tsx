import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import Collapse from '../../../components/Collapse';
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
  ButtonsAccessWrapper,
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
  AllCitiesProps,
  AllCountriesProps,
  AllStatesProps,
  OptionsSelect,
  IAdministratorApi,
} from './interface';

const Account: React.FC = () => {
  const [personId, setPersonId] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [genre, setGenre] = useState('M');
  const [email, setEmail] = useState('');
  const [typeFone, setTypeFone] = useState('F');
  const [countryCode, setCountryCode] = useState('');
  const [ddd, setDdd] = useState('');
  const [fone, setFone] = useState('');
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
    options: [],
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
  const userId = 2;

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
  }, []);

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
  }, [country]);

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
  }, [state, country]);

  useEffect(() => {
    api
      .get(`/administrador/${userId}`)
      .then(({ data }) => {
        const userApi = data as IAdministratorApi;

        setPersonId(userApi.pessoa.pessoaId);
        setFirstName(userApi.pessoa.nome);
        setLastName(userApi.pessoa.sobrenome);
        setCpf(userApi.pessoa.cpf);
        console.log(util.removeHoursDateTimeApi(userApi.pessoa.dataNascimento));
        setBirthDate(
          util.removeHoursDateTimeApi(userApi.pessoa.dataNascimento)
        );
        setGenre(userApi.pessoa.sexo);
        setEmail(userApi.pessoa.email);
        setTypeFone('');
        setCountryCode('');
        setDdd('');
        setNumberAddress(String(userApi.pessoa.numero));
        setUsername(userApi.pessoa.usuario);
        setPasswordBack(userApi.pessoa.senha);
        setLevelAccess(userApi.nivelAcesso);
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
  }, []);

  function handleUpdateProfile() {
    api
      .put('/administrador/', {
        administradorId: userId,
        nivelAcesso: levelAccess,
        ultimoUsuarioAlteracao: userId,
        pessoa: {
          pessoaId: personId,
          nome: firstName,
          sobrenome: lastName,
          cpf: cpf,
          dataNascimento: birthDate,
          sexo: genre,
          email: email,
          telefone: null,
          endereco: null,
          numero: numberAddress,
          usuario: username,
          senha: password === '' ? passwordBack : password,
          ultimoUsuarioAlteracao: userId,
        },
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
          'Houve algum erro inesperado na busca de munícipios, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
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
                  setCpf(e.target.value)
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
                name="typeFone"
                value={typeFone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTypeFone(e.target.value)
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
                value={fone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFone(e.target.value)
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
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary" onClick={handleUpdateProfile}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default Account;
