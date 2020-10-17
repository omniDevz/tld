import styled, { css } from 'styled-components';

import { ButtonProps } from './interface';

export const ButtonStyled = styled.button<ButtonProps>`
  text-align: center;
  width: 100%;
  max-width: 240px;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0 auto;
  transform: scale(1);
  transition: all 260ms ease-in-out;

  ${(props) => {
    if (Boolean(props.to?.length)) {
      return css`
        a {
          padding: 1rem 2.4rem;
        }
      `;
    } else {
      return css`
        padding: 1rem 2.4rem;
      `;
    }
  }}

  ${(props) => {
    if (Boolean(props.disabled)) {
      return css`
        opacity: 0.42;
      `;
    }
  }}

  ${(props) => {
    if (props.color === 'primary')
      return css`
        border: 2px solid ${(props) => props.theme.colors.primary};
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
    else if (props.color === 'primary-outline')
      return css`
        background: transparent;
        border: 2px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
      `;
    else if (props.color === 'secondary')
      return css`
        border: 2px solid ${(props) => props.theme.colors.secondary};
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.tertiary};
      `;
    else if (props.color === 'secondary-outline')
      return css`
        background: transparent;
        border: 2px solid ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.secondary};
      `;
  }}

  &:hover {
    transform: scale(0.96);
  }

  @media (min-width: 700px) {
    max-width: 24rem;
  }

  a {
    color: inherit;
    width: 100%;
    height: 100%;
  }
`;
