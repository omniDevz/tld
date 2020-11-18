import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';
import api from '../../../../../services/api';
import CardRevenue from './components/CardRevenue';

import util from '../../../../../utils/util';

import {
  RecordRevenueWrapper,
  SearchRecord,
  ListRevenues,
  Fields,
} from './styled';

import { IRecordRevenueApi, IRecordRevenue } from './interface';

const RecordRevenue: React.FC = () => {
  const [listRevenues, setListRevenues] = useState<IRecordRevenue[]>([]);
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

    handleSearchRecordRevenue();
  };

  const handleSearchRecordRevenue = () => {
    api
      .get(`vwFaturamento/dataInicio=${dateInit}&dataFim=${dateEnd}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const RevenuesApi: IRecordRevenueApi[] = response.data;

        const Revenues = RevenuesApi.map((RevenueApi) => {
          const Revenue: IRecordRevenue = {
            email: RevenueApi.email,
            nameStudent: RevenueApi.nomeAluno,
            nameCourse: RevenueApi.nomeCurso,
            phone: RevenueApi.numeroTelefone,
            salesDate: RevenueApi.dataHora,
            salesID: RevenueApi.vandaId,
          };

          return Revenue;
        });

        setListRevenues([...Revenues]);
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
    <PageAuthorized type="back" text="Relatório de faturamento">
      <RecordRevenueWrapper>
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
        <SearchRecord color="secondary" onClick={handleSearchRecordRevenue}>
          Pesquisar
        </SearchRecord>
        <ListRevenues>
          {!!listRevenues &&
            listRevenues.map((Revenue) => (
              <CardRevenue key={Revenue.salesID} revenue={Revenue} />
            ))}
        </ListRevenues>
      </RecordRevenueWrapper>
    </PageAuthorized>
  );
};

export default RecordRevenue;
