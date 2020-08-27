import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const ButtonLink: React.FC<ButtonProps> = ({ to, title, children, color }) => {
  return (
    <ButtonStyled to={to} title={title} color={color}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonLink;
