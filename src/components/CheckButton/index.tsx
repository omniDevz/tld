import React from 'react';

import {
  CheckButtonWrapper,
  CheckButtonStyled,
  Label,
} from './styled';

import { CheckButtonProps } from './interface';

const CheckButton: React.FC<CheckButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  const id = `id_${name}`;

  return (
    <CheckButtonWrapper>
      <CheckButtonStyled
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </CheckButtonWrapper>
  );
};

export default CheckButton;
