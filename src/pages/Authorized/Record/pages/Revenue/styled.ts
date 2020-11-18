import styled from 'styled-components';
import Button from '../../../../../components/Button';
import {ButtonStyled} from '../../../../../components/Button/styled';

export const RecordRevenueWrapper = styled.div`
  padding: 3.2rem 0 0;
  display: flex;
  flex-direction: column;
  grid-gap: 1.6rem;

  ${ButtonStyled} {
    margin: 0;
    max-width: 100%;
  }
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.6rem;
`;

export const SearchRecord = styled(Button)``;

export const ListRevenues = styled.ul`
  max-height: calc(100vh - 30rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 1.6rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
