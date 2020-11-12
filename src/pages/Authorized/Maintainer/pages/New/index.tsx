import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import useForm from '../../../../../hooks/useForm';
import PageAuthorized from '../../../../../components/PageAuthorized';

import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

import imgConfirm from '../../../../../assets/images/confirm.svg';

import { Steps, ConfirmContainer, Image } from './styled';
import api from '../../../../../services/api';
import { useAuth } from '../../../../../contexts/auth';
import util from '../../../../../utils/util';
import StepFor from './components/StepFor';
import validation from '../../../../../utils/validation';

function MaintainerNew() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    cpf: '',
    birthDate: '',
    genre: 'M',
    email: '',
    emailConfirm: '',
    typePhone: 'F',
    countryCode: '',
    ddd: '',
    number: '',
    username: '',
    password: '',
  };
  const [cep, setCep] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');
  const [levelAccess, setLevelAccess] = useState(0);

  const history = useHistory();
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(1);
  const [registerConfirm] = useState<Boolean>(false);

  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const { user } = useAuth();

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (values.firstName === '') {
          addToast('Preencha o primeiro nome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_firstName')?.focus();
          return false;
        }
        if (values.firstName.length <= 2) {
          addToast('Primeiro nome deve conter no mínimo três caracteres', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_firstName')?.focus();
          return false;
        }
        if (values.lastName === '') {
          addToast('Preencha o sobrenome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_lastName')?.focus();
          return false;
        }
        if (values.cpf === '') {
          addToast('Preencha o CPF', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_cpf')?.focus();
          return false;
        }
        if (values.birthDate === '') {
          addToast('Preencha a data de aniversário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_birthDate')?.focus();
          return false;
        }
        if (!validation.dateMinToDay(values.birthDate)) {
          addToast('A data deve ser inferior ao dia de hoje', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_birthDate')?.focus();
          return;
        }
        if (values.genre === '') {
          addToast('Selecione seu gênero sexual', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (values.email === '') {
          addToast('Preencha o e-mail', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_email')?.focus();
          return false;
        }
        if (!validation.email(values.email)) {
          addToast('Preencha um e-mail válido', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_email')?.focus();
          return false;
        }
        if (values.emailConfirm === '') {
          addToast('Preencha a confirmação do e-mail', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_emailConfirm')?.focus();
          return false;
        }
        if (values.emailConfirm !== values.email) {
          addToast('O e-mail e sua confirmação devem ser iguais', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_emailConfirm')?.focus();
          return false;
        }
        break;
      case 2:
        const anyFieldHasValueInFone = Boolean(
          values.ddd.length + values.number.length
        );

        if (!anyFieldHasValueInFone) return true;

        if (values.countryCode === '') {
          addToast('Preencha p código de discagem', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_countryCode')?.focus();
          return false;
        }
        if (values.ddd === '') {
          addToast('Preencha o DDD', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_ddd')?.focus();
          return false;
        }
        if (values.number === '') {
          addToast('Preencha o número de telefone', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_number')?.focus();
          return false;
        }
        break;
      case 3:
        const anyFieldContainValueInAddress = Boolean(
          cep.length +
            country.length +
            state.length +
            city.length +
            neighborhood.length +
            address.length +
            numberAddress.length
        );

        if (!anyFieldContainValueInAddress) return true;

        if (cep === '') {
          addToast('Preencha o CEP', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_cep')?.focus();
          return false;
        }
        if (country === '') {
          addToast('Preencha o país', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_country')?.focus();
          return false;
        }
        if (state === '') {
          addToast('Preencha o estado', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_state')?.focus();
          return false;
        }
        if (city === '') {
          addToast('Preencha a cidade', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_city')?.focus();
          return false;
        }
        if (neighborhood === '') {
          addToast('Preencha o bairro', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_neighborhood')?.focus();
          return false;
        }
        if (address === '') {
          addToast('Preencha o endereço', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_address')?.focus();
          return false;
        }
        if (numberAddress === '') {
          addToast('Preencha o número de endereço', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_numberAddress')?.focus();
          return false;
        }
        break;
    }

    return true;
  }

  function handleStep(step: 1 | 2 | 3 | 4, to: 0 | 1 | 2 | 3 | 4) {
    if (step < to && !validationStep(step)) return null;

    setStep(to);
    return null;
  }

  function handleSetPersonApi() {
    return {
      nome: values.firstName,
      sobrenome: values.lastName,
      cpf: util.onlyNumbers(values.cpf),
      dataNascimento: values.birthDate,
      sexo: values.genre,
      numero: values.numberAddress,
      telefone: {
        codigoDiscagem: values.countryCode,
        ddd: values.ddd,
        numeroTelefone: values.number,
        tipoTelefone: values.typePhone,
      },
      endereco: {
        cep: util.onlyNumbers(cep),
        logradouro: address,
        bairro: neighborhood,
        cidade: city,
        estado: state,
        pais: country,
      },
      email: values.email,
      ultimoUsuarioAlteracao: user?.personId,
    };
  }

  function handleSubmitAdministrator() {
    api
      .post('administrador', {
        nivelAcesso: levelAccess - 1,
        ultimoUsuarioAlteracao: user?.personId,
        pessoa: handleSetPersonApi(),
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast(
          'Cadastro realizado com sucesso, foi enviado um e-mail para finalização',
          {
            appearance: 'success',
            autoDismiss: true,
          }
        );
        history.push('/maintainer');
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado no cadastro do mantenedor, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleSubmitTeacher() {
    api
      .post('professor', {
        ultimoUsuarioAlteracao: user?.personId,
        administrador: {
          nivelAcesso: levelAccess - 1,
          ultimoUsuarioAlteracao: user?.personId,
          pessoa: handleSetPersonApi(),
        },
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast(
          'Cadastro realizado com sucesso, foi enviado um e-mail para finalização do cadastro',
          {
            appearance: 'warning',
            autoDismiss: true,
          }
        );
        history.push('/maintainer');
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado no cadastro do mantenedor, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleConfirmRegister() {
    if (levelAccess === 0) {
      addToast('Selecione um nível de acesso', {
        appearance: 'warning',
        autoDismiss: true,
      });
      return;
    }

    levelAccess < 3 ? handleSubmitAdministrator() : handleSubmitTeacher();
  }

  return (
    <PageAuthorized text="Novo mantenedor" type="back">
      <Steps step={step}>
        <StepOne
          handleStep={handleStep}
          handleChange={handleChange}
          values={values}
        />
        <StepTwo
          handleStep={handleStep}
          handleChange={handleChange}
          values={values}
        />
        <StepThree
          handleStep={handleStep}
          values={{
            cep,
            country,
            state,
            city,
            neighborhood,
            address,
            numberAddress,
          }}
          setValues={{
            setCep,
            setCountry,
            setState,
            setCity,
            setNeighborhood,
            setAddress,
            setNumberAddress,
          }}
        />

        <StepFor
          handleStep={handleStep}
          levelAccess={levelAccess}
          setLevelAccess={setLevelAccess}
          handleConfirmRegister={handleConfirmRegister}
        />
      </Steps>
      <ConfirmContainer registerConfirm={registerConfirm}>
        <Image src={imgConfirm} alt="" />
      </ConfirmContainer>
    </PageAuthorized>
  );
}

export default MaintainerNew;
