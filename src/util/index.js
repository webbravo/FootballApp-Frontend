import CryptoJS from "crypto-js";

export const formatCurrency = (num) => {
  return `N${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
};

export const genRanStr = (length = 6) =>
  Math.random().toString(20).substr(2, length);

export const genCode = (str) => {
  return CryptoJS.AES.encrypt(str, "secret key 123").toString();
};
