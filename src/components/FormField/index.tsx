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
  maxlength,
  handleListInPressKey,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = !!value?.length;
  const hasLabel = !!label?.length;
  const isTextarea = type === 'textarea';
  const hasPrefix = prefix !== undefined;

  function handleKeyPress(
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    if (!handleListInPressKey) return;

    for (const { key, handleFunction } of handleListInPressKey) {
      if (event.key === key) {
        handleFunction();
      }
    }
  }

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId} type={type}>
        {hasPrefix && <Prefix htmlFor={fieldId}>{prefix}</Prefix>}
        {isTextarea ? (
          <Textarea
            id={fieldId}
            hasValue={hasValue}
            hasChildren={!!children}
            value={value}
            name={name}
            onChange={onChange}
            autoComplete="off"
            maxLength={maxlength}
            onKeyPress={handleKeyPress}
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
            maxLength={maxlength}
            onKeyPress={handleKeyPress}
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
