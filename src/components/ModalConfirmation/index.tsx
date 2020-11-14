import React from 'react';

import Button from '../Button';

import {
  ModalConfirmationWrapper,
  ButtonsWrapper,
  Description,
  Image,
  Title,
} from './styled';

import { IModalConfirmation } from './interface';

const ModalConfirmation: React.FC<IModalConfirmation> = ({
  title,
  image,
  description,
  textCancel = 'Cancelar',
  textConfirm = 'Confirmar',
  showModal,
  setValue,
  setCloseModal,
}) => {
  function handleSetTrue() {
    setValue(true);
  }

  function handleSetCloseModal() {
    setCloseModal(false);
  }

  return (
    <ModalConfirmationWrapper showModal={showModal}>
      <Title>{title}</Title>

      {!!description && <Description>{description}</Description>}
      {!!image && <Image src={image} alt="Imagem da modal" />}

      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleSetCloseModal}>
          {textCancel}
        </Button>
        <Button color="primary-outline" onClick={handleSetTrue}>
          {textConfirm}
        </Button>
      </ButtonsWrapper>
    </ModalConfirmationWrapper>
  );
};

export default ModalConfirmation;
