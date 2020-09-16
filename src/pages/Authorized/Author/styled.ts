import styled from 'styled-components';
import { CheckButtonWrapper } from '../../../components/CheckButton/styled';

export const Form = styled.form`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export const ListAuthors = styled.ul`
  flex: 1;
  padding: 3.2rem 0;
`;

export const ItemAuthor = styled.li`
  margin-bottom: 1.6rem;
  padding: .8rem 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  &:last-child {
    margin-bottom: 0;
  }

  ${CheckButtonWrapper} {
    justify-content: flex-end;
  }
`;

export const HeaderAuthor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Name = styled.p`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Recomendations = styled.p`
  font-size: 1.6rem;
  margin: .8rem 0;
`;
