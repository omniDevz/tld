const util = {
  onlyNumbers(value: string) {
    return value.replace(/\D/g, '');
  },
  removeHoursDateTimeApi(value: string) {
    return value.slice(0, 10);
  },
  includesToLowerCase(valueOne: string, valueTwo: string): boolean {
    return valueOne.toLowerCase().includes(valueTwo.toLowerCase());
  },
  includesToArray(values: string[], compare: string): boolean {
    for (const value of values) {
      if (util.includesToLowerCase(value, compare)) return true;
    }
    return false;
  },
  getFormatDate(value: string) {
    const date = new Date(util.removeHoursDateTimeApi(value));

    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);

    return `${day}/${month}/${date.getFullYear()}`;
  },
  emptyValue(value: string, id: string) {
    if (value !== '') return true;

    document.getElementById(id)?.focus();
    return false;
  },
  onFocus(id: string) {
    document.getElementById(id)?.focus();
  },
  formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL' // R$
    }).format(price / 100);
  },
};

export default util;
