import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu, FiX, FiArrowLeft, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../../../../../contexts/auth';

import logoImg from '../../../../../../assets/images/logoBlack.svg';

import { HeaderContainer, Logo, Button, Text } from './styled';

import { HeaderProps } from './interface';

const Header: React.FC<HeaderProps> = ({
  isMenuIcon,
  teacher,
  onClick,
  title,
  type,
  text,
}) => {
  const hasText = Boolean(text);
  const history = useHistory();

  const { signOut } = useAuth();

  function handleBackNavigation() {
    history.goBack();
  }

  function handleLogoff() {
    signOut();
    history.push('/');
  }

  return (
    <HeaderContainer>
      {type === 'back' ? (
        <Button onClick={handleBackNavigation}>
          <FiArrowLeft />
        </Button>
      ) : type === 'exit' ? (
        <Button onClick={handleLogoff}>
          <FiLogOut />
        </Button>
      ) : (
        <Link to="/" title="Ir para Home">
          <Button>
            <Logo src={logoImg} alt="Logo Thomaz Language Platform" />
          </Button>
        </Link>
      )}

      {teacher && hasText && <Text>{text}</Text>}

      <Button title={title} onClick={onClick}>
        {isMenuIcon ? <FiMenu /> : <FiX />}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
