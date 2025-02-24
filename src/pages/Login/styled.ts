import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonStyled } from '../../components/Button/styled';

export const Title = styled.h3`
  padding: 12rem 24px 32px;
  font-size: 3.2rem;
  font-weight: 700;
  text-align: left;
`;

export const Form = styled.form``;

export const FieldSetWrapper = styled.fieldset`
  padding: 0 24px;

  > div {
    margin-bottom: 12px;
  }
`;

export const LinkRecoveryPassword = styled(Link)`
  font-size: 1.8rem;
  font-weight: 500;
  display: block;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const Button = styled(ButtonStyled)`
  margin-top: auto;
  margin-left: auto;
  margin-bottom: 8px;
  width: calc(50% - 12px);
`;

export const WrapperButton = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;

  ${Button} {
    width: 100%;
  }
`;

export const TypesLogin = styled.div`
  margin-top: 42vh;
  display: flex;
  padding: 0 24px;
`;
