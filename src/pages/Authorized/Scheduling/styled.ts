import { FiX } from 'react-icons/fi';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  margin-left: auto;
`;

export const SchedulingWrapper = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: calc(100vh - 15.5rem);
  margin-top: 2rem;
  padding: 3.2rem;
`;

export const Header = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.tertiary};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Today = styled.p`
  font-size: 2.4rem;
`;

export const MoreToday = styled(FiX)`
  font-size: 4rem;
  transform: rotate(45deg);
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: rotate(135deg);
  }
`;

export const ListDays = styled.ul``;
