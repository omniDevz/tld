import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import Collapse from '../../../../../components/Collapse';
import FormField from '../../../../../components/FormField';
import PageAuthorized from '../../../../../components/PageAuthorized';
import RadioButton from '../../../../../components/RadioButton';

import useForm from '../../../../../hooks/useForm';

import util from '../../../../../utils/util';

import api from '../../../../../services/api';

import {
  Form,
  TwoFields,
  ThreeFields,
  Fieldset,
  ButtonsWrapper,
  ButtonsAccessWrapper,
  HalfContainer,
  CEPContainer,
} from './styled';

import {
  IParamsStudentDetails,
  IStudentDetailApi,
  IStudentDetail,
  IPhone,
  IAddress,
} from './interface';
import { IAddressApi } from '../../../Account/interface';

const MaintainerDetail: React.FC = () => {
  const [student, setStudent] = useState<IStudentDetail>({} as IStudentDetail);
  const [comments, setComments] = useState('');

  const { addToast } = useToasts();
  const history = useHistory();

  const route = useParams();
  const { studentId } = route as IParamsStudentDetails;

  function handleBack() {
    history.goBack();
  }

  useEffect(() => {
    api
      .get(`/aluno/${studentId}`)
      .then(({ data }) => {
        const userApi = data as IStudentDetailApi;

        const phone = userApi.pessoa.telefone;
        const getPhone: IPhone | null = phone
          ? {
              countryCode: phone?.codigoDiscagem || 0,
              ddd: phone?.ddd || 0,
              number: phone?.numeroTelefone || 0,
              typeFone: phone?.tipoTelefone || 'C',
              phoneId: phone?.telefoneId || 0,
            }
          : null;

        const addressUser = userApi.pessoa.endereco as IAddressApi;
        const getAddress: IAddress | null = addressUser
          ? {
              address: addressUser.logradouro,
              cep: addressUser.cep,
              city: addressUser.cidade,
              country: addressUser.pais,
              neighborhood: addressUser.bairro,
              state: addressUser.estado,
              addressId: addressUser.enderecoId,
            }
          : null;

        const getStudent = {
          firstName: userApi.pessoa.nome,
          lastName: userApi.pessoa.sobrenome,
          cpf: userApi.pessoa.cpf,
          birthDate: util.removeHoursDateTimeApi(userApi.pessoa.dataNascimento),
          genre: userApi.pessoa?.sexo || 'O',
          phone: getPhone,
          address: getAddress,
          email: userApi.pessoa.email,
          numberAddress: userApi.pessoa.numero,
          studentId: userApi.alunoId,
          premium: userApi.eAssinante,
        } as IStudentDetail;

        setComments(userApi.observacao || '');

        setStudent(getStudent);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado ao obter detalhes do aluno, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [studentId]);

  return (
    <PageAuthorized type="back" text="Sobre o aluno">
      <Form>
        <Collapse label="Dados pessoais">
          <Fieldset>
            <TwoFields>
              <FormField
                label="Nome"
                name="firstName"
                value={student.firstName}
              />
              <FormField
                label="Sobrenome"
                name="lastName"
                value={student.lastName}
              />
            </TwoFields>
            <TwoFields>
              <FormField label="CPF" name="cpf" value={student.cpf || ''} />
              <FormField
                label="Data nascimento"
                name="birthDate"
                value={student.birthDate}
                type="date"
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
              value={student.genre || ''}
            />
            <FormField label="E-mail" name="email" value={student.email} />
          </Fieldset>
        </Collapse>

        {student.phone && (
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
                  value={student.phone?.typeFone || ''}
                />
              </HalfContainer>
              <ThreeFields>
                <FormField
                  label=""
                  name="countryCode"
                  value={String(student.phone?.countryCode) || ''}
                  prefix="+"
                />
                <FormField
                  label=""
                  name="ddd"
                  value={String(student.phone?.ddd) || ''}
                  prefix="0"
                />
                <FormField
                  label="Número"
                  name="number"
                  value={String(student.phone?.number) || ''}
                />
              </ThreeFields>
            </Fieldset>
          </Collapse>
        )}

        {student.address && (
          <Collapse label="Endereço">
            <Fieldset>
              <CEPContainer>
                <FormField
                  label="CEP"
                  name="cep"
                  value={String(student.address?.cep) || ''}
                />
              </CEPContainer>
              <TwoFields>
                <FormField
                  label="País"
                  name="country"
                  value={student.address?.country || ''}
                />
                <FormField
                  label="UF"
                  name="state"
                  value={student.address?.state || ''}
                />
              </TwoFields>
              <FormField
                label="Cidade"
                name="city"
                value={student.address?.city || ''}
              />
              <FormField
                label="Bairro"
                name="neighborhood"
                value={student.address?.neighborhood || ''}
              />
              <TwoFields>
                <FormField
                  label="Endereço"
                  name="address"
                  value={student.address?.address || ''}
                />
                <FormField
                  label="Nº"
                  name="numberAddress"
                  value={String(student.numberAddress) || ''}
                />
              </TwoFields>
            </Fieldset>
          </Collapse>
        )}

        <FormField
          label="Observações"
          name="comments"
          value={comments}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setComments(e.target.value)
          }
          type="textarea"
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleBack}>
          Voltar
        </Button>
        <Button color="primary" onClick={() => {}}>
          Salvar observações
        </Button>
      </ButtonsWrapper>
    </PageAuthorized>
  );
};

export default MaintainerDetail;
