import styled from 'styled-components';

export const DayItemWrapper = styled.li`
  color: ${(props) => props.theme.colors.tertiary};

  & + li {
    margin-top: 1.6rem;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: .8rem;
`;

export const Hour = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
