import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Button from '../../../Button';

import Header from './components/Header';

import { HeaderWrapper, Navigation, Menu, LinkList } from './styled';

import { HeaderProps } from './interface';

const links = [
  {
    route: 'home',
    title: 'Ir para página inicial',
    text: 'Home',
  },
  {
    route: 'article',
    title: 'Ir para página de artigos recomendados',
    text: 'Artigos',
  },
  {
    route: 'author',
    title: 'Ir para página de autores',
    text: 'Autores',
  },
  {
    route: 'transmissionNotification',
    title: 'Assistir live do professor',
    text: 'Live',
  },
  {
    route: 'student',
    title: 'Ir para página de alunos',
    text: 'Alunos',
  },
  {
    route: 'classes',
    title: 'Ir para página da turma',
    text: 'Turma',
  },
  {
    route: 'consultingType',
    title: 'Ir para página de tipo de consultoria',
    text: 'Tipo de consultoria',
  },
  {
    route: 'maintainer',
    title: 'Ir para página de mantenedores',
    text: 'Mantenedores',
  },
  {
    route: 'account',
    title: 'Ir para página de perfil',
    text: 'Perfil',
  },
];

const PageHeader: React.FC<HeaderProps> = ({ type, teacherOn, text }) => {
  const howType = type === undefined ? 'icon' : type;
  const hasTeacherOn = Boolean(teacherOn);
  const { url } = useRouteMatch();
  const routeActive = url.replace('/', '');

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
                {links
                  .filter(({ route }) => route !== routeActive)
                  .map((link) => (
                    <Button
                      key={link.route}
                      color="primary-outline"
                      to={`/${link.route}`}
                      title={link.title}
                    >
                      {link.text}
                    </Button>
                  ))}
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
