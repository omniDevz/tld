import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logoBlack.svg';

import { HeaderWrapper } from './styled';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link to="/" title="Ir para a página inicial">
        <img src={logo} alt="Logo da Thomaz Language Platform" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
