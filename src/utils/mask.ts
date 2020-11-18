const mask = {
  cpf: (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  },
  cep: (value: string) => {
    return value.replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  },
  phoneComplete: (value: string) => {
    return value.replace(/\D/g, "")
      .replace(/^(\d{2})(\d{2})(\d)/g, "+$1 ($2) $3")
      .replace(/(\d)(\d{4})$/, "$1-$2");
  }
};

export default mask;
