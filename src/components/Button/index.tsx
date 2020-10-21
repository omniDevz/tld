import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  onClick,
  to = '',
  title,
}) => {
  const hasLink = Boolean(to?.length);

  return (
    <ButtonStyled type="button" onClick={onClick} color={color} to={to}>
      {hasLink ? (
        <Link to={to} title={title}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </ButtonStyled>
  );
};

export default Button;
