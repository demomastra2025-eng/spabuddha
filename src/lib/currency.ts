const formatter = new Intl.NumberFormat("kk-KZ", {
  style: "currency",
  currency: "KZT",
  maximumFractionDigits: 0,
});

export const formatCurrency = (value: number) => formatter.format(value);
