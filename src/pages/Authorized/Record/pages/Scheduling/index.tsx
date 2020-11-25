import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';
import api from '../../../../../services/api';
import CardScheduling from './components/CardScheduling';

import util from '../../../../../utils/util';

import {
  RecordSchedulingWrapper,
  ListSchedulings,
  SearchRecord,
  Fields,
} from './styled';

import { IRecordSchedulingApi, IRecordScheduling } from './interface';

const RecordScheduling: React.FC = () => {
  const [listSchedulings, setListSchedulings] = useState<IRecordScheduling[]>(
    []
  );
  const [dateInit, setDateInit] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const { addToast } = useToasts();

  const handlePressEnterAction = () => {
    if (!dateInit.length) {
      util.onFocus('id_dateInit');
      return;
    }

    if (!dateEnd.length) {
      util.onFocus('id_dateEnd');
      return;
    }

    handleSearchRecordScheduling();
  };

  const handleSearchRecordScheduling = () => {
    api
      .get(`VWAgendamentos/dataInicio=${dateInit}&dataFim=${dateEnd}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const SchedulingsApi: IRecordSchedulingApi[] = response.data;

        console.log(SchedulingsApi);

        const Schedulings = SchedulingsApi.map((SchedulingApi) => {
          const scheduling: IRecordScheduling = {
            confirm: SchedulingApi.confirmado,
            dateTime: SchedulingApi.dataHora,
            nameStudent: SchedulingApi.nomeAluno,
            schedulingId: SchedulingApi.agendamentoId,
          };

          return scheduling;
        });

        setListSchedulings([...Schedulings]);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca do relatório, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  };

  return (
    <PageAuthorized type="back" text="Relatório de alunos">
      <RecordSchedulingWrapper>
        <Fields>
          <FormField
            label="Data começo"
            name="dateInit"
            value={dateInit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateInit(e.target.value)
            }
            type="date"
            handleListInPressKey={[
              {
                handleFunction: handlePressEnterAction,
                key: 'Enter',
              },
            ]}
          />
          <FormField
            label="Data termino"
            name="dateEnd"
            value={dateEnd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateEnd(e.target.value)
            }
            type="date"
            handleListInPressKey={[
              {
                handleFunction: handlePressEnterAction,
                key: 'Enter',
              },
            ]}
          />
        </Fields>
        <SearchRecord color="secondary" onClick={handleSearchRecordScheduling}>
          Pesquisar
        </SearchRecord>
        <ListSchedulings>
          {!!listSchedulings &&
            listSchedulings.map((scheduling) => (
              <CardScheduling
                key={scheduling.schedulingId}
                scheduling={scheduling}
              />
            ))}
        </ListSchedulings>
      </RecordSchedulingWrapper>
    </PageAuthorized>
  );
};

export default RecordScheduling;
