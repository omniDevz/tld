import { ChangeEvent } from 'react';

export interface StepTreeProps {
  handleStep: function(
    1 | 2 | 3,
    0 | 1 | 2 | 3
  );
  handleConfirmRegister: function();

}
export interface FormProps {
  background: string;
}
