import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../../../components/Button';
import FormField from '../../../../../../../components/FormField';
import Select from '../../../../../../../components/Select';

import {
  apiCountries,
  apiViaCep,
  apiLocations,
} from '../../../../../../../services/api';

import {
  Form,
  Fieldset,
  Legend,
  CEPContainer,
  TwoFields,
  ButtonsWrapper,
} from './styled';

import {
  StepThreeProps,
  AllCountriesProps,
  AllStatesProps,
  AllCitiesProps,
  OptionsSelect,
} from './interface';
import util from '../../../../../../../utils/util';

const StepThree: React.FC<StepThreeProps> = ({
  handleConfirmRegister,
  handleStep,
  values,
  setValues,
}) => {
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

        setValues.setCountry('Brasil');

        setValues.setState(uf);
        if (!util.emptyValue(uf, 'id_state')) return null;

        setValues.setCity(localidade);
        if (!util.emptyValue(localidade, 'id_city')) return null;

        setValues.setNeighborhood(bairro);
        if (!util.emptyValue(bairro, 'id_neighborhood')) return null;

        setValues.setAddress(logradouro);
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
    if (values.country !== 'Brasil') return;

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
    <Form onSubmit={() => handleStep(2, 3)}>
      <Fieldset>
        <Legend>Endereço</Legend>
        <CEPContainer>
          <FormField
            label="CEP"
            name="cep"
            value={values.cep}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues.setCep(e.target.value)
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
            onChange={(e: any) => setValues.setCountry(e.value)}
            value={values.country}
            options={countries.options}
          />
          {values.country === 'Brasil' ? (
            <Select
              name="state"
              label="UF"
              onChange={(e: any) => setValues.setState(e.value)}
              value={values.state}
              options={states.options}
            />
          ) : (
            <FormField
              label="UF"
              name="state"
              value={values.state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValues.setState(e.target.value)
              }
            />
          )}
        </TwoFields>
        {values.country === 'Brasil' ? (
          <Select
            name="city"
            label="Cidade"
            onChange={(e: any) => setValues.setCity(e.value)}
            value={values.city}
            options={cities.options}
          />
        ) : (
          <FormField
            label="Cidade"
            name="city"
            value={values.city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues.setCity(e.target.value)
            }
          />
        )}
        <FormField
          label="Bairro"
          name="neighborhood"
          value={values.neighborhood}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValues.setNeighborhood(e.target.value)
          }
        />
        <TwoFields>
          <FormField
            label="Endereço"
            name="address"
            value={values.address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues.setAddress(e.target.value)
            }
          />
          <FormField
            label="Nº"
            name="numberAddress"
            value={values.numberAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues.setNumberAddress(e.target.value)
            }
          />
        </TwoFields>
      </Fieldset>

      <ButtonsWrapper>
        <Button onClick={() => handleStep(3, 2)} color="primary-outline">
          Voltar
        </Button>
        <Button onClick={handleConfirmRegister} color="primary">
          Enviar
        </Button>
      </ButtonsWrapper>
    </Form>
  );
};

export default StepThree;
