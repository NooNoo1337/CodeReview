'use strict';

const assert = require('assert').strict;
const { getStringBetweenQuotes } = require('./getStringBetweenQuotes.js');

{
  const line = '<richelieu@gmail.fr>';
  const email = getStringBetweenQuotes(line, '<>');
  const expected = 'richelieu@gmail.fr';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu email is richelieu@gmail.fr';
  const email = getStringBetweenQuotes(line, '<>');
  const expected = '';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu email is <>';
  const email = getStringBetweenQuotes(line, '<>');
  const expected = '';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu >richelieu@gmail.fr<';
  const email = getStringBetweenQuotes(line, '<>');
  const expected = '';
  assert.equal(email, expected);
}
