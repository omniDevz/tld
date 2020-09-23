import styled, { css } from 'styled-components';

import { InputProps, TextProps, LabelProps } from './interface';

export const FormFieldWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label<LabelProps>`
  position: relative;
  width: 100%;

  background: transparent;
  display: flex;
  align-items: center;
  width: 100%;

  box-shadow: var(--box-shadow);

  border: 2.5px solid ${(props) => props.theme.colors.secondary};

  padding: 0 1.4rem;

  ${(props) =>
    props.type === 'textarea'
      ? css`
          height: 8rem;
        `
      : css`
          height: 4.2rem;
        `}
`;

export const Text = styled.label<TextProps>`
  color: ${(props) => props.theme.colors.secondaryOpacity64};

  height: 2.2rem;
  position: absolute;
  top: 50%;
  left: 0.6rem;
  transform: translateY(-50%);

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;

  padding: 1.4rem 1.2rem;

  transition: 240ms ease-in-out;

  ${({ type }) =>
    type === 'date' &&
    css`
      background: ${(props) => props.theme.colors.tertiary};
    `}

  ${({ hasLabel }) =>
    !hasLabel &&
    css`
      display: none;
    `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    background: ${(props) => props.theme.colors.tertiary};
    border: 3px solid ${(props) => props.theme.colors.secondary};
    transform: scaleX(0);
    transition: 360ms ease-in-out;
  }
`;

export const Input = styled.input<InputProps>`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  font-weight: 600;
  padding-top: 0.8rem;

  outline: 0;
  width: 100%;
  background: transparent;
  border: none;

  resize: none;

  &:focus {
    + ${Text} {
      color: ${(props) => props.theme.colors.secondary};
      z-index: 1;
      left: 1.6rem;
      top: 0;
      transform: scale(0.8) translateY(-1.5rem);

      &:before {
        transform: scaleX(1);
      }
    }
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      + ${Text} {
        color: ${(props) => props.theme.colors.secondary};
        z-index: 1;
        left: 0;
        top: 0;
        transform: scale(0.8) translateY(-1.5rem);

        &:before {
          transform: scaleX(1);
        }
      }
    `};
`;

export const Textarea = styled.textarea<InputProps>`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  font-weight: 600;
  padding-top: 0.8rem;

  outline: 0;
  width: 100%;
  background: transparent;
  border: none;

  resize: none;

  &:focus {
    + ${Text} {
      color: ${(props) => props.theme.colors.secondary};
      z-index: 1;
      left: 1.6rem;
      top: 0;
      transform: scale(0.8) translateY(-1.5rem);

      &:before {
        transform: scaleX(1);
      }
    }
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      + ${Text} {
        color: ${(props) => props.theme.colors.secondary};
        z-index: 1;
        left: 0;
        top: 0;
        transform: scale(0.8) translateY(-1.5rem);

        &:before {
          transform: scaleX(1);
        }
      }
    `};
`;

export const Prefix = styled.label`
  font-size: 2rem;
  padding-top: 0.8rem;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondaryOpacity64};
`;
