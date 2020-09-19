import { ChangeEvent } from 'react';

export interface StepTwoProps {
  values: {
    typeFone: string;
    countryCode: string;
    ddd: string;
    number: string;
  };
  handleChange: FunctionComponentElement;
  handleStep: function(
    1 | 2 | 3,
    0 | 1 | 2 | 3
  );
}
export interface FormProps {
  background: string;
}
