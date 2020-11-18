import React from 'react';

import {
  CardStudentWrapper,
  CreateAccount,
  NameStudent,
  Contact,
  Bold,
} from './styled';

const CardStudent: React.FC = () => {
  return (
    <CardStudentWrapper>
      <NameStudent>Nome aluno</NameStudent>
      <Contact>E-mail</Contact>
      <Contact>Telefone</Contact>
      <CreateAccount>
        Cadastrado em: <Bold>18/11/2020</Bold>
      </CreateAccount>
    </CardStudentWrapper>
  );
};

export default CardStudent;
