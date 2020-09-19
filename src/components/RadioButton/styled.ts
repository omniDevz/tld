import styled from 'styled-components';

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  column-gap: 0.8rem;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Label = styled.label`
  border: 2.5px solid ${(props) => props.theme.colors.secondary};
  padding: 0.8rem 1.2rem;
  opacity: 0.68;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;

  &:hover {
    padding: 0.8rem 1.6rem;
  }
`;

export const RadioButtonStyled = styled.input`
  display: none;

  &:checked + ${Label} {
    padding: 0.8rem 1.6rem;
    opacity: 1;
  }
`;
