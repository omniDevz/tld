import React from 'react';

import {
  RadioButtonWrapper,
  RadioButtonContainer,
  RadioButtonStyled,
  Label,
} from './styled';

import { RadioButtonProps } from './interface';

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  name,
  value,
  onChange = () => {},
}) => {
  return (
    <RadioButtonWrapper>
      {options.map((option) => {
        const id = `id_${name}_${option.value}`;

        return (
          <RadioButtonContainer key={id}>
            <RadioButtonStyled
              id={id}
              type="radio"
              value={option.value}
              checked={option.value === value}
              name={name}
              onChange={onChange}
            />
            <Label htmlFor={id}>{option.label}</Label>
          </RadioButtonContainer>
        );
      })}
    </RadioButtonWrapper>
  );
};

export default RadioButton;
