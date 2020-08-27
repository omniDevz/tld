import styled from 'styled-components';

export const Content = styled.section`
  padding: 0 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Code = styled.h2`
  font-size: 5.6rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.h3`
  font-size: 2.4rem;
  text-align: center;
`;
