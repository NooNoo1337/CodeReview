'use strict';

const assert = require('assert').strict;
const { getStringBetweenSymbols } = require('./getStringBetweenSymbols.js');

{
  const line = '<richelieu@gmail.fr>';
  const email = getStringBetweenSymbols(line, '<', '>');
  const expected = 'richelieu@gmail.fr';
  assert.equal(email, expected);
}

{
  const line = '<richelieu@gmail.fr)';
  const email = getStringBetweenSymbols(line, '<', ')');
  const expected = 'richelieu@gmail.fr';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu email is richelieu@gmail.fr';
  const email = getStringBetweenSymbols(line, '<', '>');
  const expected = '';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu email is <>';
  const email = getStringBetweenSymbols(line, '<', '>');
  const expected = '';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu >richelieu@gmail.fr<';
  const email = getStringBetweenSymbols(line, '<', '>');
  const expected = '';
  assert.equal(email, expected);
}
