import React from 'react';

import FormField from '../../../../../../../components/FormField';
import RadioButton from '../../../../../../../components/RadioButton';

import backgroundNewRegister from '../../../../../../../assets/images/backgroundNewRegisterStepTwo.svg';

import {
  Form,
  Fieldset,
  Legend,
  ButtonWrapper,
  Button,
  ContainerRadiosButtons,
  ThreeColumns,
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
        <Legend>Telefone</Legend>
        <ContainerRadiosButtons>
          <RadioButton
            name="typeFone"
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
            onChange={handleChange}
            value={values.typeFone}
          />
        </ContainerRadiosButtons>
        <ThreeColumns>
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
            type="number"
            prefix="0"
          />
          <FormField
            label="Número"
            name="number"
            value={values.number}
            onChange={handleChange}
            type="number"
          />
        </ThreeColumns>
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
