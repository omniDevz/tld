import styled from 'styled-components';

import { Input } from '../../../../../../../components/FormField/styled';
import { SelectStyled } from '../../../../../../../components/Select/styled';

export const Container = styled.article`
  justify-content: space-between;
  flex: 1;
  padding: 0 24px;
`;

export const Title = styled.h2`
  padding-top: 1.6rem;
  font-size: 4.6rem;
  width: 100%;
  text-align: left;
`;

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

export const CEPContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  width: 80%;
`;

export const TwoFields = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  column-gap: 12px;

  > div:nth-child(2) {
    ${SelectStyled} .react-select__control,
    ${Input} {
      padding-left: 1.42rem;
      padding-right: 1.42rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;

  button {
    margin: 8px auto;
  }
`;
