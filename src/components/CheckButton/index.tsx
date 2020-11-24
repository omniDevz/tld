import React from 'react';

import { CheckButtonWrapper, CheckButtonStyled, Label, Icon } from './styled';

import { CheckButtonProps } from './interface';

const CheckButton: React.FC<CheckButtonProps> = ({
  setValue,
  label,
  value,
  name,
}) => {
  const id = `id_${name}`;

  return (
    <CheckButtonWrapper>
      <CheckButtonStyled
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.checked);
        }}
      />
      <Label htmlFor={id}>
        <Icon />
        {label}
      </Label>
    </CheckButtonWrapper>
  );
};

export default CheckButton;
