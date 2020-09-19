import React from 'react';

import backgroundNewRegister from '../../../../../../../assets/images/backgroundNewRegisterStepTree.svg';

import {
  Form,
  Fieldset,
  Legend,
  ButtonWrapper,
  Button,
  Description,
  Term,
} from './styled';

import { StepTreeProps } from './interface';

const StepTree: React.FC<StepTreeProps> = ({
  handleStep,
  handleConfirmRegister,
}) => {
  return (
    <Form background={backgroundNewRegister} onSubmit={() => {}}>
      <Fieldset>
        <Legend>Termo de Uso</Legend>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Description>
        <Term>Finalizando o cadastro você estará aceitando o termo *</Term>
      </Fieldset>
      <ButtonWrapper>
        <Button onClick={handleConfirmRegister} color="primary">
          Finalizar
        </Button>
        <Button onClick={() => handleStep(3, 2)} color="primary-outline">
          Voltar
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default StepTree;
