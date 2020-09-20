import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import useForm from '../../../../../hooks/useForm';
import PageDefaultProf from '../../../../../components/PageDefaultProf';

import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

import imgConfirm from '../../../../../assets/images/confirm.svg';

import { Steps, ConfirmContainer, Image } from './styled';

function MaintainerNew() {
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
  const [cep, setCep] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');

  const history = useHistory();
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(3);
  const [registerConfirm, setRegisterConfirm] = useState<Boolean>(false);

  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();

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
        if (values.cpf.length !== 11) {
          addToast('Informe seu CPF corretamente', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_cpf')?.focus();
          return false;
        }
        if (values.dateOfBirth === '') {
          addToast('Preencha a data de aniversário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_dateOfBirth')?.focus();
          return false;
        }
        if (values.genre === '') {
          addToast('Selecione seu genêro sexual', {
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
      case 4:
        if (values.username === '') {
          addToast('Preencha o nome de usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_username')?.focus();
          return false;
        }
        if (values.password === '') {
          addToast('Preencha a senha do usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_password')?.focus();
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

  function handleConfirmRegister() {
    setRegisterConfirm(true);

    setTimeout(() => {
      setRegisterConfirm(false);
      history.push('/');
    }, 2200);
  }

  return (
    <PageDefaultProf text="Novo mantenedor" type="back">
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
      </Steps>
      <ConfirmContainer registerConfirm={registerConfirm}>
        <Image src={imgConfirm} alt="" />
      </ConfirmContainer>
    </PageDefaultProf>
  );
}

export default MaintainerNew;
