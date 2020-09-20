export interface ParamsProps {
  maintainerId: string;
}

export interface AllCountriesProps {
  translations: {
    br: string;
  };
}

export interface AllStatiesProps {
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
