const formatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
});

export const formatCurrency = (value: number) => `${formatter.format(value)} ₸`;
