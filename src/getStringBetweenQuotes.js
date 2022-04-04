'use strict';

const getStringBetweenQuotes = (str, quotes) => {
  const [firstQuote, secondQuote] = quotes;

  let i = str.indexOf(firstQuote);

  if (i === -1) return '';

  str = str.substring(i + 1);

  if (secondQuote) {
    i = str.indexOf(secondQuote);
    if (i === -1) return '';
    str = str.substring(0, i);
  }
  return str;
};

module.exports = { getStringBetweenQuotes };
