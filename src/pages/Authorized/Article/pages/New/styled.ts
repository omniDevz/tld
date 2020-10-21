import styled from 'styled-components';

import { ButtonStyled } from '../../../../../components/Button/styled';
import { FormFieldWrapper } from '../../../../../components/FormField/styled';

export const Form = styled.form`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
  flex: 1;

  ${FormFieldWrapper} {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  column-gap: 1.6rem;
`;

export const InputAndButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.8rem;
  grid-gap: 1.6rem;
  width: 100%;

  ${ButtonStyled} {
    padding: 0;

    svg {
      position: static;
      transform: none;
    }
  }
`;
