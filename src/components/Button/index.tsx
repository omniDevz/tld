import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick} color={color}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
