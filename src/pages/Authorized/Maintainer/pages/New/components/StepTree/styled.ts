import styled from 'styled-components';

import ButtonStyled from '../../../../../../../components/Button';

import { FormProps } from './interface';

export const Form = styled.form<FormProps>`
  background-image: url(${({ background }) => background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: calc(100vw - 48px);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  max-height: calc(100% - 60px);
  margin: auto;

  > div {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Description = styled.p`
  max-height: calc(100% - 70px);
  font-size: 1.8rem;
  line-height: 1.25;
  text-align: justify;
  overflow-y: auto;

  @media (min-width: 700px) {
    max-height: auto;
  }
`;

export const Term = styled.label`
  color: ${(props) => props.theme.colors.primary};
  display: block;
  text-align: right;
  font-size: 1.2rem;
  margin-top: 8px;

  @media (min-width: 700px) {
    margin-bottom: 32px;
  }
`;

export const Legend = styled.legend`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 2.4rem;
  padding-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  column-gap: 16px;
  margin-bottom: 16px;
  justify-content: flex-start;

  @media (min-width: 700px) {
    margin-top: auto;

    button {
      margin-right: 24px;
      margin-left: 0;
    }
  }
`;

export const Button = styled(ButtonStyled)`
  margin-right: 0;
`;
