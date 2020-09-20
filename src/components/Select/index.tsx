import React from 'react';

import { SelectWrapper, SelectStyled, Text } from './styled';

import { SelectProps } from './interface';

const Select: React.FC<SelectProps> = ({
  options,
  value,
  name,
  label,
  onChange,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = value !== '';
  const valueSelected = options.find((option) => option.value === value);

  return (
    <SelectWrapper hasValue={hasValue}>
      <SelectStyled
        inputId={fieldId}
        name={name}
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        placeholder=""
        value={valueSelected}
        onChange={onChange}
        autoComplete="false"
      />
      <Text htmlFor={fieldId}>{label}</Text>
    </SelectWrapper>
  );
};

export default Select;
