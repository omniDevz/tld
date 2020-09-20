import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import Collapse from '../../../../../components/Collapse';
import FormField from '../../../../../components/FormField';
import PageDefaultProf from '../../../../../components/PageDefaultProf';
import RadioButton from '../../../../../components/RadioButton';
import Select from '../../../../../components/Select';

import useForm from '../../../../../hooks/useForm';
import validations from '../../../../../utils/validations';

import api, {
  apiCountries,
  apiLocations,
  apiViaCep,
} from '../../../../../services/api';

import {
  Form,
  TwoFields,
  ThreeFields,
  Fieldset,
  ButtonsWrapper,
  ButtonsAccessWrapper,
  HalfContainer,
  CEPContainer,
} from './styled';

import {
  ParamsProps,
  AllCitiesProps,
  AllCountriesProps,
  AllStatiesProps,
  OptionsSelect,
} from './interface';

const MaintainerUpdate: React.FC = () => {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    cpf: '',
    birthDate: '',
    genre: 'M',
    email: '',
    typeFone: 'F',
    countryCode: '',
    ddd: '',
    number: '',
    username: '',
    password: '',
    passwordNew: '',
    passwordConfirm: '',
  };
  const [cep, setCep] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');
  const [countries, setCountries] = useState<OptionsSelect>({
    options: [],
  });

  const [staties, setStaties] = useState<OptionsSelect>({
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

  const { handleChange, values } = useForm(valuesInitials);
  let { maintainerId } = useParams<ParamsProps>();
  const { addToast } = useToasts();
  const history = useHistory();

  function handleCep() {
    if (values.cep.length < 8) {
      alert('Informe o CEP corretamente');
      return null;
    }

    apiViaCep
      .get(`/${values.cep.replace('-', '')}/json`)
      .then(({ data }) => {
        if (data.erro) {
          alert('Confirme o campo de cep, algo está incorreto');
          return null;
        }

        const { uf, localidade, bairro, logradouro } = data;

        setCountry('Brasil');

        setState(uf);
        if (!validations.EmptyValue(uf, 'id_state')) return null;

        setCity(localidade);
        if (!validations.EmptyValue(localidade, 'id_city')) return null;

        setNeighborhood(bairro);
        if (!validations.EmptyValue(bairro, 'id_neighborhood')) return null;

        setAddress(logradouro);
        if (!validations.EmptyValue(logradouro, 'id_address')) return null;

        document.getElementById('id_numberAddress')?.focus();
      })
      .catch(() => {
        addToast('Informe o CEP corretamente', {
          appearance: 'error',
          autoDismiss: true,
        });
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
      .catch(({ response }) => {
        console.error(response);
      });
  }, []);

  useEffect(() => {
    if (values.country !== 'Brasil') return;

    apiLocations
      .get('/estados')
      .then(({ data }) => {
        const optionsStaties = data.map((state: AllStatiesProps) => {
          const optionsNameStaties = {
            value: state.sigla,
            label: state.sigla,
          };

          return optionsNameStaties;
        });

        setStaties({
          options: optionsStaties,
        });
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }, [values.country]);

  useEffect(() => {
    if (values.country !== 'Brasil') return;

    apiLocations
      .get(`/estados/${values.state}/municipios`)
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
      .catch(({ response }) => {
        console.error(response);
      });
  }, [values.state, values.country]);

  return (
    <PageDefaultProf type="back" text="Alterar mantenedor">
      <Form>
        <Collapse label="Dados pessoais">
          <Fieldset>
            <TwoFields>
              <FormField
                label="Nome"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
              />
              <FormField
                label="Sobrenome"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
              />
            </TwoFields>
            <TwoFields>
              <FormField
                label="CPF"
                name="cpf"
                value={values.cpf}
                onChange={handleChange}
              />
              <FormField
                label="Data nascimento"
                name="birthDate"
                value={values.birthDate}
                onChange={handleChange}
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
              value={values.genre}
              onChange={handleChange}
            />
            <FormField
              label="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
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
                value={values.typeFone}
                onChange={handleChange}
              />
            </HalfContainer>
            <ThreeFields>
              <FormField
                label=""
                name="countryCode"
                value={values.countryCode}
                onChange={handleChange}
                prefix="+"
              />
              <FormField
                label=""
                name="ddd"
                value={values.ddd}
                onChange={handleChange}
                prefix="0"
              />
              <FormField
                label="Número"
                name="number"
                value={values.number}
                onChange={handleChange}
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
                name="country"
                label="País"
                onChange={(e: any) => setCountry(e.value)}
                value={country}
                options={countries.options}
              />
              {country === 'Brasil' ? (
                <Select
                  name="state"
                  label="UF"
                  onChange={(e: any) => setState(e.value)}
                  value={state}
                  options={staties.options}
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
              value={values.username}
              onChange={handleChange}
            />
          </Fieldset>
          <ButtonsAccessWrapper>
            <Button color="primary-outline">Trocar usuário</Button>
          </ButtonsAccessWrapper>
          <Fieldset>
            <FormField
              label="Senha atual"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <FormField
              label="Nova senha"
              name="passwordNew"
              value={values.passwordNew}
              onChange={handleChange}
            />
            <FormField
              label="Confirmar senha"
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
            />
          </Fieldset>
          <ButtonsAccessWrapper>
            <Button color="primary-outline">Trocar usuário</Button>
          </ButtonsAccessWrapper>
        </Collapse>
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageDefaultProf>
  );
};

export default MaintainerUpdate;
