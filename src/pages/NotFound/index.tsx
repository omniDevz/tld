import React from 'react';
import PageDefault from '../../components/PageDefault';

import { Content, Code, Description } from './styled';

function NotFound() {
  return (
    <PageDefault>
      <Content>
        <Code>404</Code>
        <Description>Página não encontrada</Description>
      </Content>
    </PageDefault>
  );
}

export default NotFound;
