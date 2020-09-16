import React from 'react';

import PageHeader from './components/PageHeader';

import { Main, Footer } from './styled';

import { PageDefaultProfProps } from './interface';

const PageDefaultProf: React.FC<PageDefaultProfProps> = ({
  children,
  type,
  text,
}) => {
  return (
    <>
      <PageHeader teacherOn={true} type={type} text={text} />
      <Main>{children}</Main>
      <Footer>&copy; copyright 2020</Footer>
    </>
  );
};

export default PageDefaultProf;
