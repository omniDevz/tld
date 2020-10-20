import styled from 'styled-components';

import { FormFieldWrapper } from '../../../../../components/FormField/styled';

export const Form = styled.form`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
  flex: 1;

  ${FormFieldWrapper} {
    width: 100%;
  }
`;
