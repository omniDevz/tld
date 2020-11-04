import React from 'react';

import FormField from '../../../../../../../components/FormField';
import RadioButton from '../../../../../../../components/RadioButton';

import backgroundNewRegister from '../../../../../../../assets/images/backgroundNewRegister.svg';

import mask from '../../../../../../../utils/mask';

import { Form, Fieldset, Legend, Button, TwoFields } from './styled';

import { StepOneProps } from './interface';

const StepOne: React.FC<StepOneProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Form
      background={backgroundNewRegister}
      id="stepOne"
      onSubmit={() => handleStep(1, 2)}
    >
      <Fieldset>
        <Legend>Dados Pessoais</Legend>
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
            value={mask.cpf(values.cpf)}
            onChange={handleChange}
          />
          <FormField
            label="Aniversário"
            name="birthDate"
            value={values.birthDate}
            onChange={handleChange}
            type="date"
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
          type="email"
        />
      </Fieldset>
      <Button onClick={() => handleStep(1, 2)} color="primary">
        Continuar
      </Button>
    </Form>
  );
};

export default StepOne;
