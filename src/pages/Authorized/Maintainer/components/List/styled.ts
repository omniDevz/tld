import styled from 'styled-components';

export const ListMaintainers = styled.ul`
  flex: 1;
  padding: 3.2rem 0;
`;

export const ItemMaintainer = styled.li`
  margin-bottom: 1.6rem;
  padding: 0.8rem 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderMaintainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  row-gap: 0.8rem;
`;

export const Name = styled.p`
  font-size: 2.4rem;
  text-align: left;
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.p`
  font-size: 1.8rem;
  width: 100%;
  color: ${(props) => props.theme.colors.secondary};
`;

export const LevelAccess = styled.div`
  border: 2.5px solid ${(props) => props.theme.colors.gray};
  padding: 0.4rem 0.8rem;
  font-size: 1.8rem;
`;
