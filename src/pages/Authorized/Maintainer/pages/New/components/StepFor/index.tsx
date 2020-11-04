import React from 'react';

import Button from '../../../../../../../components/Button';

import { useAuth } from '../../../../../../../contexts/auth';

import {
  Form,
  Legend,
  Fieldset,
  ButtonsWrapper,
  LevelAccessWrapper,
} from './styled';

import { StepForProps } from './interface';

const StepFor: React.FC<StepForProps> = ({
  handleStep,
  levelAccess,
  setLevelAccess,
  handleConfirmRegister,
}) => {
  const { user } = useAuth();

  function handleClassNameButtonActive(
    level: number
  ): 'secondary-outline' | 'secondary' {
    return levelAccess === level ? 'secondary' : 'secondary-outline';
  }

  return (
    <Form onSubmit={handleConfirmRegister}>
      <Fieldset>
        <Legend>Nível de acesso</Legend>
        <LevelAccessWrapper>
          <Button
            color={handleClassNameButtonActive(1)}
            onClick={() => setLevelAccess(1)}
          >
            Administrador
          </Button>
          {(user?.levelAccess || 0) >= 1 && (
            <Button
              color={handleClassNameButtonActive(2)}
              onClick={() => setLevelAccess(2)}
            >
              Administrador Pro
            </Button>
          )}

          {(user?.levelAccess || 0) >= 2 && (
            <Button
              color={handleClassNameButtonActive(3)}
              onClick={() => setLevelAccess(3)}
            >
              Professor
            </Button>
          )}
        </LevelAccessWrapper>
      </Fieldset>
      <ButtonsWrapper>
        <Button onClick={() => handleStep(4, 3)} color="primary-outline">
          Voltar
        </Button>
        <Button onClick={handleConfirmRegister} color="primary">
          Cadastrar
        </Button>
      </ButtonsWrapper>
    </Form>
  );
};

export default StepFor;
