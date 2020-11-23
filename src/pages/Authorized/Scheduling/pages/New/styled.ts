import styled from 'styled-components';

import { FormFieldWrapper, Label, Input } from '../../../../../components/FormField/styled';


export const SchedulingNewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DateCreate = styled.p`
  font-size: 1.8rem;
  text-align: right;
  font-weight: bold;
  margin-top: 2.4rem;
`;

export const Fields = styled.fieldset`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  margin-bottom: 3.2rem;
`;

export const Hours = styled.div`
  display: flex;
  font-size: 2rem;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  grid-gap: .2rem;
  margin-top: 2rem;

  ${FormFieldWrapper} {
    width: 4rem;

    ${Label} {
      padding: 0 .4rem;

      ${Input} {
        padding: 0;
        text-align: center;
      }
    }
  }
`;

export const Description = styled.label`
  margin-left: .4rem;
  font-weight: 500;
`;
