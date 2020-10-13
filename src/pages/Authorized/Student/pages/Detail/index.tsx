import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import Collapse from '../../../../../components/Collapse';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';
import RadioButton from '../../../../../components/RadioButton';
import Select from '../../../../../components/Select';

import useForm from '../../../../../hooks/useForm';

import {
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
  AllStatesProps,
  OptionsSelect,
} from './interface';
import util from '../../../../../utils/util';

const MaintainerDetail: React.FC = () => {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    cpf: '',
    birthDate: '',
    genre: 'M',
    email: '',
    comments: '',
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

  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

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
      .catch(({ response }) => {
        console.error(response);
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
      .catch(({ response }) => {
        console.error(response);
      });
  }, [state, country]);

  return (
    <PageAuthorized type="back" text="Sobre o aluno">
      <Form>
        <Collapse label="Dados pessoais">
          <Fieldset>
            <TwoFields>
              <FormField
                label="Nome"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              <FormField
                label="Sobrenome"
                name="lastName"
                value={values.lastName}
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
            <FormField
              label="Observações"
              name="comments"
              value={values.comments}
              onChange={handleChange}
              type="textarea"
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
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleBack}>
          Voltar
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default MaintainerDetail;
