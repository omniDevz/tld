import React from 'react';

import FormField from '../../../../../../../components/FormField';

import backgroundNewRegister from '../../../../../../../assets/images/backgroundNewRegisterStepTwo.svg';

import {
  Form,
  Fieldset,
  Legend,
  ButtonWrapper,
  Button,
  TwoFields,
} from './styled';

import { StepTwoProps } from './interface';

const StepTwo: React.FC<StepTwoProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Form
      background={backgroundNewRegister}
      id="stepTwo"
      onSubmit={() => handleStep(2, 3)}
    >
      <Fieldset>
        <Legend>Dados Pessoais</Legend>
        <TwoFields>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            type="password"
            onChange={handleChange}
          />
        </TwoFields>
      </Fieldset>
      <ButtonWrapper>
        <Button onClick={() => handleStep(2, 3)} color="primary">
          Continuar
        </Button>
        <Button onClick={() => handleStep(2, 1)} color="primary-outline">
          Voltar
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default StepTwo;
