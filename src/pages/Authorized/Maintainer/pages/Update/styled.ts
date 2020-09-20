import styled from 'styled-components';

import { CheckButtonWrapper } from '../../../../../components/CheckButton/styled';
import { FormFieldWrapper } from '../../../../../components/FormField/styled';

export const Form = styled.form`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2.4rem;
  flex: 1;

  ${CheckButtonWrapper} {
    justify-content: flex-end;
  }

  ${FormFieldWrapper} {
    width: 100%;
  }
`;

export const Fieldset = styled.div`
  display: grid;
  flex-direction: column;
  row-gap: 0.8rem;
`;

export const TwoFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.2rem;
`;

export const ThreeFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  column-gap: 0.8rem;
`;

export const HalfContainer = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.2rem;
`;

export const ButtonsWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  column-gap: 1.6rem;
`;
