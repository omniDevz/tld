import styled from 'styled-components';

export const Main = styled.main`
  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
