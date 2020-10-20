import styled from 'styled-components';

export const ListConsultingTypes = styled.ul`
  flex: 1;
  padding: 3.2rem 0;
`;

export const ItemConsultingType = styled.li`
  margin-bottom: 1.6rem;
  padding: 0.8rem 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const HeaderConsultingType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Description = styled.p`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.primary};
`;
