import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageDefaultProf from '../../../../../components/PageDefaultProf';

import api from '../../../../../services/api';

import { Form, ButtonsWrapper } from './styled';

import { ParamsProps } from './interface';

const MaintainerUpdate: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  let { id } = useParams<ParamsProps>();
  const { addToast } = useToasts();
  const history = useHistory();

  return (
    <PageDefaultProf type="back" text="Alterar autor">
      <Form>
        <FormField
          label="Nome"
          name="firstname"
          value={firstname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstname(e.target.value)
          }
        />
        <FormField
          label="Sobrenome"
          name="lastname"
          value={lastname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastname(e.target.value)
          }
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageDefaultProf>
  );
};

export default MaintainerUpdate;
