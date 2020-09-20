import styled from 'styled-components';
import { CheckButtonWrapper } from '../../../components/CheckButton/styled';

export const Form = styled.form`
  margin-top: 3.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  margin: auto 0;

  > div {
    margin-top: 1.2rem;

    &:first-of-type {
      margin-top: 5.2rem;
    }
  }
`;

export const Legend = styled.legend`
  font: 600 2.4rem 'Ubuntu', sans-serif;
  margin-bottom: 0.8rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;
