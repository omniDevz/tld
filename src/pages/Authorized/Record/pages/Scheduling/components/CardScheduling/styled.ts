import styled from 'styled-components';

export const CardSchedulingWrapper = styled.li`
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: .8rem;
`;

export const NameScheduling = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: .4rem;
`;

export const Contact = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const CreateAccount = styled.p`
  font-size: 1.6rem;
  text-align: right;
`;

export const Bold = styled.b`
  font-weight: 600;
`;
