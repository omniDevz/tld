import styled from 'styled-components';

import { ButtonStyled } from '../../../../../../../components/Button/styled';

export const Fieldset = styled.fieldset`
  margin: auto;

  > div {
    margin-bottom: 1.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Form = styled.form`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: calc(100vw - 48px);
  display: flex;
  flex-direction: column;
`;

export const Legend = styled.legend`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 2.4rem;
  padding-bottom: 2.4rem;
`;

export const LevelAccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.8rem;
  width: calc(100vw - 48px);

  ${ButtonStyled} {
    max-width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 1.6rem;
  margin-bottom: 2.4rem;
  width: 100%;

  button {
    margin: 8px auto;
  }
`;
