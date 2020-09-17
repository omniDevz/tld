import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.tertiary};
`;

export const Footer = styled.footer`
  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 24px;
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
`;
