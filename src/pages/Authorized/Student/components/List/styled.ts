import styled from 'styled-components';

import { CheckButtonWrapper } from '../../../../../components/CheckButton/styled';

export const ListStudents = styled.ul`
  flex: 1;
  padding: 3.2rem 0;
`;

export const ItemStudent = styled.li`
  margin-bottom: 1.6rem;
  padding: 0.8rem 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${CheckButtonWrapper} {
    justify-content: flex-end;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Name = styled.p`
  font-size: 2rem;
  text-align: left;
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.6rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  width: 100%;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.2rem;
`;
