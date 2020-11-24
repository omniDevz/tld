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
  transition: all 240ms ease-in-out;
  text-shadow: var(--text-shadow);
  padding: 0.8rem 0;
  font-size: 1.8rem;
  grid-gap: 1.6rem;
  cursor: pointer;
  display: flex;
  width: 100%;
`;

export const Icon = styled.span`
  border: 2.5px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
  box-shadow: var(--box-shadow);
  border-radius: 4.8rem;
  display: flex;
  width: 4.8rem;
  height: 2.4rem;
  padding: 0.4rem;
  transition: all 260ms ease-in-out;

  &:before {
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    border: inherit;
    margin-left: 2.4rem;
    border-radius: inherit;
    box-shadow: var(--box-shadow);
    transition: all 260ms ease-in-out;
    background: ${(props) => props.theme.colors.secondary};
  }
`;

export const CheckButtonStyled = styled.input`
  display: none;

  &:checked + ${Label} ${Icon} {
    background: ${(props) => props.theme.colors.primary};

    &:before {
      border-color: ${(props) => props.theme.colors.secondary};
      margin-left: 0;
    }
  }
`;
