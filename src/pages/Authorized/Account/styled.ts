import styled from 'styled-components';

import { FormFieldWrapper } from '../../../components/FormField/styled';

export const Form = styled.form`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2.4rem;
  flex: 1;

  ${FormFieldWrapper} {
    width: 100%;
  }
`;

export const Fieldset = styled.div`
  display: grid;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const CEPContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  width: 80%;
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

export const ButtonsAccessWrapper = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 2.4rem;
`;

export const ButtonsWrapper = styled.div`
  margin: 2.4rem 0;
  display: flex;
  column-gap: 1.6rem;
`;

export const LevelAccess = styled.p`
  padding-bottom: 0.8rem;
  text-align: right;
  font-size: 1.8rem;
  width: 100%;
`;
