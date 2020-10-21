import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { Live, ButtonsWrapper } from './styled';

import { IParamsTransmissionNotification } from './interface';

const TransmissionNotificationLive: React.FC = () => {
  let { transmissionNotificationId } = useParams<
    IParamsTransmissionNotification
  >();
  const { addToast } = useToasts();
  const history = useHistory();

  function handleDeleteLive() {
    api
      .delete(`notificacaoTransmissao/${transmissionNotificationId}`)
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Live encerrada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/transmissionNotification');
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  return (
    <PageAuthorized type="back" text="Ao vivo">
      <Live>
        <img src="https://source.unsplash.com/random/person" alt="img" />
      </Live>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDeleteLive}>
          Encerrar live
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default TransmissionNotificationLive;
