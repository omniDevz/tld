import React from 'react';

import { FormFieldProps } from './interface';
import {
  FormFieldWrapper,
  Label,
  Input,
  Textarea,
  Text,
  Prefix,
} from './styled';

const FormField: React.FC<FormFieldProps> = ({
  children,
  value,
  name,
  label,
  onChange,
  type,
  prefix,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value !== undefined && value.length);
  const hasLabel = Boolean(label.length);
  const typeInput = type !== undefined ? type : 'text';
  const isTeaxtarea = type === 'textarea';
  const hasPrefix = prefix !== undefined;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId} type={typeInput}>
        {hasPrefix && <Prefix htmlFor={fieldId}>{prefix}</Prefix>}
        {isTeaxtarea ? (
          <Textarea
            id={fieldId}
            hasValue={hasValue}
            hasChildren={Boolean(children)}
            value={value}
            name={name}
            onChange={onChange}
            autoComplete="off"
          />
        ) : (
          <Input
            id={fieldId}
            hasValue={hasValue}
            hasChildren={Boolean(children)}
            value={value}
            name={name}
            onChange={onChange}
            type={typeInput}
            autoComplete="off"
          />
        )}

        <Text hasLabel={hasLabel} type={typeInput} htmlFor={fieldId}>
          {label}
        </Text>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
