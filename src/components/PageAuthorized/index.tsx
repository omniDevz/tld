import React from 'react';

import PageHeader from './components/PageHeader';

import { Main, Footer } from './styled';

import { PageAuthorizedProps } from './interface';

const PageAuthorized: React.FC<PageAuthorizedProps> = ({
  children,
  type,
  text,
  footer = true,
}) => {
  return (
    <>
      <PageHeader teacherOn={true} type={type} text={text} />
      <Main>{children}</Main>
      {footer && <Footer>&copy; copyright 2020</Footer>}
    </>
  );
};

export default PageAuthorized;
