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
  border: 3px solid ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  margin-bottom: 1.6rem;

  svg {
    width: 7.2rem;
    height: 7.2rem;
    color: ${(props) => props.theme.colors.secondary};
    stroke-width: 2px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TwoColumns = styled.div`
  flex-direction: row;
  grid-gap: 1.2rem;
`;

export const Name = styled.h5`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2.4rem;
  font-weight: 600;
`;

export const Information = styled.p`
  font-size: 1.6rem;

  b {
    font-size: 1.8rem;
  }
`;

export const Descriptions = styled.div`
  align-items: flex-start;

  > ${Information}:nth-child(2) {
    margin-bottom: 1.6rem;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 1.6rem;
`;
