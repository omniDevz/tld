import { ChangeEvent } from 'react';

export interface StepThreeProps {
  values: {
    cep: string;
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    address: string;
    numberAddress: string;
  }

  setValues: {
    setCep: React.Dispatch<React.SetStateAction<string>>;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    setState: React.Dispatch<React.SetStateAction<string>>;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    setNeighborhood: React.Dispatch<React.SetStateAction<string>>;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    setNumberAddress: React.Dispatch<React.SetStateAction<string>>;
  }
  handleConfirmRegister: function();
  handleStep: function(
    1 | 2 | 3 | 4,
    1 | 2 | 3 | 4
  );
}

export interface AllCountriesProps {
  translations: {
    br: string;
  }
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
  options: OptionSelect[]
}
