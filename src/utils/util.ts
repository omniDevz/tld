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
  getFormatDateApi(value: string = '', separator: string = '-') {
    const date = !!value?.length ? new Date(value) : new Date();

    const month = `${date.getMonth() + 1}`;

    return `${date.getFullYear()}${separator}${month}${separator}${date.getDate()}`;
  },
  getFormatDate(value: string, separator: string = '/') {
    const date = new Date(util.removeHoursDateTimeApi(value));

    const day = `0${date.getDate() + 1}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);

    return `${day}${separator}${month}${separator}${date.getFullYear()}`;
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
  getMonthsNames(): string[] {
    return [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
  },
  getFormatDateNameMount(value: string) {
    const months = util.getMonthsNames();

    const date = new Date(value);

    const day = `${date.getDate()+1}`.padStart(2, '0');

    return `${day} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
  },
  getFormatDateNameMountNow() {
    return util.getFormatDateNameMount(util.getFormatDateApi(new Date().toString()));
  },
};

export default util;
