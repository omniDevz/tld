import { useState } from 'react';

function useForm(valuesInitials: any) {
  const [values, setValues] = useState(valuesInitials);

  function setValue(key: string, value: any) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  function clearForm() {
    setValues(valuesInitials);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
