import styled from 'styled-components';

export const RadioButtonWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const RadioButtonContainer = styled.div``;

export const Label = styled.label`
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  padding: 0.8rem 1.2rem;
  border-radius: 32px;
  opacity: 0.48;
  transition: all 240ms ease-in-out;
  cursor: pointer;

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
