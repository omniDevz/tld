import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import PageAuthorized from '../../../../../components/PageAuthorized';

import api from '../../../../../services/api';

import { Live, ButtonsWrapper, Description, Frame } from './styled';

import {
  IParamsTransmissionNotification,
  ITransmissionNotificationApi,
  ITransmissionNotification,
} from './interface';

const TransmissionNotificationLive: React.FC = () => {
  const [live, setLive] = useState<ITransmissionNotification>(
    {} as ITransmissionNotification
  );

  const {
    transmissionNotificationId,
  } = useParams() as IParamsTransmissionNotification;
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

  function handleGetLive() {
    api
      .get(`notificacaoTransmissao/${transmissionNotificationId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const liveApi = response.data as ITransmissionNotificationApi;

        setLive({
          description: liveApi.descricao,
          TransmissionNotificationId: liveApi.notificacaoTransmissaoId,
          link: liveApi.link,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por live, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetLive, []);

  return (
    <PageAuthorized type="back" text="Ao vivo">
      <Live>
        <Description>{live.description}</Description>
        <Frame src={live.link} />
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
