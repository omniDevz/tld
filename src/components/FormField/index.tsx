import React from 'react';

import { FormFieldProps } from './interface';
import { FormFieldWrapper, Label, Input } from './styled';

const FormField: React.FC<FormFieldProps> = ({
  value,
  name,
  label,
  onChange,
  type,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);
  const typeInput = type === undefined ? 'text' : type;

  return (
    <FormFieldWrapper hasValue={hasValue}>
      <Label htmlFor={fieldId}>{label}</Label>
      <Input
        id={fieldId}
        value={value}
        name={name}
        onChange={onChange}
        type={typeInput}
        autoComplete="off"
      />
    </FormFieldWrapper>
  );
};

export default FormField;
