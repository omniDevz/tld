import styled from 'styled-components';

export const CheckButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
`;

export const Label = styled.label`
  border: 2.5px solid ${(props) => props.theme.colors.secondary};
  padding: 0.8rem 1.6rem;
  opacity: 0.48;
  font-size: 1.6rem;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    padding: 0.8rem 1.6rem;
  }
`;

export const CheckButtonStyled = styled.input`
  display: none;

  &:checked + ${Label} {
    padding: 0.8rem 2.2rem;
    opacity: 1;
  }
`;
