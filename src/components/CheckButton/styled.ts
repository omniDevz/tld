import styled from 'styled-components';

export const CheckButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 240ms ease-in-out;

  &:hover {
    transform: scale(.96);
  }
`;

export const Label = styled.label`
  border: 2.5px solid ${(props) => props.theme.colors.secondary};
  transition: all 240ms ease-in-out;
  text-shadow: var(--text-shadow);
  padding: 0.8rem;
  font-size: 1.8rem;
  grid-gap: .8rem;
  cursor: pointer;
  display: flex;
  width: 100%;
`;

export const Icon = styled.span`
  border: 2.5px solid ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.tertiary};
  display: flex;
  align-items: center;
  width: 4.8rem;
  height: 100%;
  padding: 0 0.4rem;
  transition: all 260ms ease-in-out;

  &:before {
    content: '';
    width: 0.2rem;
    height: 0.2rem;
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
    background: ${(props) => props.theme.colors.secondary};

    &:before {
      border-color: ${(props) => props.theme.colors.tertiary};
      background: ${(props) => props.theme.colors.tertiary};
      margin-left: 0;
    }
  }
`;
