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
  onChange = () => {},
  type = 'text',
  prefix,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value !== undefined && value.length);
  const hasLabel = Boolean(label.length);
  const isTextarea = type === 'textarea';
  const hasPrefix = prefix !== undefined;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId} type={type}>
        {hasPrefix && <Prefix htmlFor={fieldId}>{prefix}</Prefix>}
        {isTextarea ? (
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
            type={type}
            autoComplete="off"
          />
        )}

        <Text hasLabel={hasLabel} type={type} htmlFor={fieldId}>
          {label}
        </Text>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
