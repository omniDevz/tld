import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

export const CardClassWrapper = styled.li`
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: .8rem;
  display: flex;
  justify-content: space-between;

  & + li {
    margin-top: .8rem;
  }
`;

export const Infos = styled.div`
`;

export const Props = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: .4rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;

export const Edit = styled(FiEdit)`
  height: 2.6rem;
  width: 2.6rem;
  cursor: pointer;
  transition: all 320ms ease-in-out;
  transform: scale(1);

  &:hover {
    transform: scale(.9);
  }
`;
