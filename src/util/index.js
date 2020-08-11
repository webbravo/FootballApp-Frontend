export const formatCurrency = num => {
  return `N${num
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
};