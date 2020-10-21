import styled from 'styled-components';

import { ButtonStyled } from '../../../../components/Button/styled';

export const Title = styled.h3`
  padding: 12rem 24px 32px;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 700px) {
    margin-top: 5%;
  }
`;

export const Form = styled.form``;

export const FieldSetWrapper = styled.fieldset`
  padding: 0 24px;

  > div {
    margin-bottom: 12px;
  }
`;

export const Image = styled.img`
  padding: 0 24px 8px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Button = styled(ButtonStyled)`
  margin-left: auto;
  margin-right: 24px;
  width: calc(50% - 12px);

  @media (min-width: 700px) {
    margin-top: 32px;
  }
`;
