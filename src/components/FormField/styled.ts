import styled, { css } from 'styled-components';

import { FormFieldWrapperProps } from './interface';

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 3px;

  transform: translateY(-50%);

  padding-left: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.tertiary};
  transition: all 320ms ease-in-out;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.2rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.tertiary};
  padding: 0 14px;

  &:focus {
    outline: none;
  }
`;

export const InputActive = styled.label`
  transform: scale(0.32);
  transform-origin: left;
  top: -60%;
  left: 16px;
  font-size: 32px;
  padding: 0 16px;
  white-space: nowrap;
`;

export const FormFieldWrapper = styled.div<FormFieldWrapperProps>`
  position: relative;

  ${({ hasValue }) =>
    hasValue &&
    css`
      ${Label} {
        transform: scale(0.32);
        transform-origin: left;
        top: -60%;
        left: 16px;
        font-size: 32px;
        padding: 0 16px;
        white-space: nowrap;
      }
    `}

  &:focus-within ${Label} {
    transform: scale(0.32);
    transform-origin: left;
    top: -60%;
    left: 16px;
    font-size: 32px;
    padding: 0 16px;
    white-space: nowrap;
  }
`;
