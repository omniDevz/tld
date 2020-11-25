import { FiEdit, FiTrash } from 'react-icons/fi';
import styled, {css} from 'styled-components';
import { IDayItemWrapper } from './interface';

export const OptionsContainer = styled.div`
  display: none;
  justify-content: flex-end;
  grid-gap: 1.2rem;
`

export const StatusContainer = styled.div`
  display: none;
  grid-template-columns: 1.5fr 1.5fr 1fr;
  grid-gap: 1.6rem;
  margin-bottom: .8rem;
`

export const DayItemWrapper = styled.li<IDayItemWrapper>`
  color: ${(props) => props.theme.colors.tertiary};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  transition: all 260ms ease-in-out;
  padding: .8rem;

  & + li {
    margin-top: 1.6rem;
  }

  ${(props) => props.open && css`
    background: ${props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.secondary};

    ${OptionsContainer} {
      display: flex;
    }

    ${StatusContainer} {
      display: grid;
    }
  `}
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: .8rem;
  cursor: pointer;
`;

export const Hour = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: .8rem;
  cursor: pointer;
`;

export const RemoveSchedule = styled(FiTrash)`
  width: 3.2rem;
  height: 3.2rem;
  transform: scale(1);
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(.92);
  }
`;

export const EditSchedule = styled(FiEdit)`
  width: 3.2rem;
  height: 3.2rem;
  transform: scale(1);
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(.92);
  }
`;
