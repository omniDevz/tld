import { ChangeEvent } from 'react';

export interface StepOneProps {
  values: {
    firstName: string;
    lastName: string;
    birthDate: string;
    cpf: string;
    genre: string;
    email: string;
    emailConfirm: string;
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
