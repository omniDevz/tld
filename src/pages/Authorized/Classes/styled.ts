import styled from 'styled-components';

export const Form = styled.div`
  padding: 1.6rem 24px;
`;

export const ListClass = styled.ul`
  position: relative;
  padding: 0 24px;
  overflow-y: auto;
  max-height: calc(100vh - 30rem);
  margin-bottom: 1.6rem;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemClass = styled.li`
  border: 2.5px solid ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;

  svg {
    width: 4rem;
    height: 4rem;
    color: ${(props) => props.theme.colors.primary};
    stroke-width: 2px;
  }

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const Name = styled.h5`
  font-size: 2.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary}
`;

export const Information = styled.p`
  font-size: 1.6rem;

  b {
    font-size: 1.8rem;
  }
`;

export const Descriptions = styled.div`
  align-items: flex-start;
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 1.6rem;
`;
