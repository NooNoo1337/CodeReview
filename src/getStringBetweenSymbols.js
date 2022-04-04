'use strict';


const getStringBetweenSymbols = (str, startSymbol, endSymbol) => {
  if (!str.includes(startSymbol) || !str.includes(endSymbol)) return '';

  const startSymbolIndex = str.indexOf(startSymbol);
  let subString = str.substring(startSymbolIndex + 1);

  const endSymbolIndex = subString.indexOf(endSymbol);
  subString = subString.substring(0, endSymbolIndex);

  return subString;
};


module.exports = { getStringBetweenSymbols };
