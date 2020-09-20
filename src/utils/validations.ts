const Validations = {
  EmptyValue(value: string, id: string) {
    if (value !== '') return true;

    document.getElementById(id)?.focus();
    return false;
  },
};

export default Validations;
