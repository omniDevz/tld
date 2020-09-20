import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import Collapse from '../../../../../components/Collapse';
import FormField from '../../../../../components/FormField';
import PageDefaultProf from '../../../../../components/PageDefaultProf';

import useForm from '../../../../../hooks/useForm';
import api from '../../../../../services/api';

import {
  Form,
  TwoFields,
  ThreeFields,
  Fieldset,
  ButtonsWrapper,
  HalfContainer,
} from './styled';

import { ParamsProps } from './interface';
import RadioButton from '../../../../../components/RadioButton';

const MaintainerUpdate: React.FC = () => {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    cpf: '',
    birthDate: '',
    genre: 'M',
    email: '',
    typeFone: 'F',
    countryCode: '',
    ddd: '',
    number: '',
    username: '',
    password: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  let { maintainerId } = useParams<ParamsProps>();
  const { addToast } = useToasts();
  const history = useHistory();

  return (
    <PageDefaultProf type="back" text="Alterar mantenedor">
      <Form>
        <Collapse label="Dados pessoais">
          <Fieldset>
            <TwoFields>
              <FormField
                label="Nome"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
              />
              <FormField
                label="Sobrenome"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
              />
            </TwoFields>
            <TwoFields>
              <FormField
                label="CPF"
                name="cpf"
                value={values.cpf}
                onChange={handleChange}
              />
              <FormField
                label="Data nascimento"
                name="birthDate"
                value={values.birthDate}
                onChange={handleChange}
              />
            </TwoFields>
            <RadioButton
              options={[
                {
                  label: 'Masculino',
                  value: 'M',
                },
                {
                  label: 'Feminino',
                  value: 'F',
                },
                {
                  label: 'Outro',
                  value: 'O',
                },
              ]}
              name="genre"
              value={values.genre}
              onChange={handleChange}
            />
            <FormField
              label="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Fieldset>
        </Collapse>
        <Collapse label="Telefone">
          <Fieldset>
            <HalfContainer>
              <RadioButton
                options={[
                  {
                    label: 'Fixo',
                    value: 'F',
                  },
                  {
                    label: 'Celular',
                    value: 'C',
                  },
                ]}
                name="typeFone"
                value={values.typeFone}
                onChange={handleChange}
              />
            </HalfContainer>
            <ThreeFields>
              <FormField
                label=""
                name="countryCode"
                value={values.countryCode}
                onChange={handleChange}
                prefix="+"
              />
              <FormField
                label=""
                name="ddd"
                value={values.ddd}
                onChange={handleChange}
                prefix="0"
              />
              <FormField
                label="Número"
                name="number"
                value={values.number}
                onChange={handleChange}
              />
            </ThreeFields>
          </Fieldset>
        </Collapse>
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageDefaultProf>
  );
};

export default MaintainerUpdate;
