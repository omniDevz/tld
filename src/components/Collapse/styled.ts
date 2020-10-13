import styled, { css } from 'styled-components';

import { CollapseToggleProps } from './interface';

export const CollapseHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.8rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;

  svg {
    width: 2.8rem;
    height: 2.8rem;
    stroke-width: 3px;
    text-shadow: var(--text-shadow);
    transform: rotate(0);
    transition: all 320ms ease-in-out;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Text = styled.p`
  position: relative;
  width: 100%;
  font: 600 2.2rem 'Ubuntu', sans-serif;
  text-shadow: var(--text-shadow);
`;

export const CollapseBody = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 400ms ease-in-out;
`;

export const CollapseWrapper = styled.div<CollapseToggleProps>`
  width: 100%;
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.tertiary};

  textarea {
    min-height: 150px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      ${CollapseHeader} svg {
        transform: rotate(180deg);
        padding-bottom: 12px;
      }

      ${CollapseBody} {
        padding: 1.4rem 0.8rem;
        max-height: 100vh;
        overflow: auto;
      }
    `}
`;
