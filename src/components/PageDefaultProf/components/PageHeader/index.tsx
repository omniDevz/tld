import React from 'react';

import Button from '../../../Button';

import Header from './components/Header';

import { HeaderWrapper, Navigation, Menu, LinkList } from './styled';

import { HeaderProps } from './interface';

const PageHeader: React.FC<HeaderProps> = ({ type, teacherOn, text }) => {
  const howType = type === undefined ? 'icon' : type;
  const hasTeacherOn = Boolean(teacherOn);

  function handleToggleMenu() {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }

  return (
    <HeaderWrapper>
      <Menu id="menu">
        <Header
          isMenuIcon={false}
          title="Fechar Menu"
          onClick={handleToggleMenu}
          teacher={hasTeacherOn}
          type={hasTeacherOn ? 'exit' : 'icon'}
        />

        <Navigation>
          <LinkList>
            {hasTeacherOn && (
              <>
                <Button
                  color="primary-outline"
                  to="/authorized/home"
                  title="Ir para página inicial"
                >
                  Home
                </Button>
                <Button
                  color="primary-outline"
                  to="/authorized/quizzes"
                  title="Ir para página de quizzes"
                >
                  Quizzes
                </Button>
                <Button
                  color="primary-outline"
                  to="/authorized/article"
                  title="Ir para página de artigos recomendados"
                >
                  Artigos
                </Button>
                <Button
                  color="primary-outline"
                  to="/authorized/author"
                  title="Ir para página de autores"
                >
                  Autores
                </Button>
                <Button
                  color="primary-outline"
                  to="/authorized/live"
                  title="Assistir live do professor"
                >
                  Live
                </Button>
                <Button
                  color="primary-outline"
                  to="/authorized/classes"
                  title="Ir para página da turma"
                >
                  Turma
                </Button>
                <Button
                  color="primary-outline"
                  to="/authorized/account"
                  title="Ir para página de perfil"
                >
                  Perfil
                </Button>
              </>
            )}
          </LinkList>
        </Navigation>
      </Menu>
      <Header
        isMenuIcon={true}
        title="Abrir Menu"
        onClick={handleToggleMenu}
        teacher={hasTeacherOn}
        type={howType}
        text={text}
      />
    </HeaderWrapper>
  );
};

export default PageHeader;
