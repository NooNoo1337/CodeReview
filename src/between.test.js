'use strict';

const assert = require('assert').strict;
const { between } = require('./between.js');

{
  const line = '<richelieu@gmail.fr>';
  const email = between(line, '<>');
  const expected = 'richelieu@gmail.fr';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu email is richelieu@gmail.fr';
  const email = between(line, '<>');
  const expected = '';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu email is <>';
  const email = between(line, '<>');
  const expected = '';
  assert.equal(email, expected);
}

{
  const line = 'Richelieu >richelieu@gmail.fr<';
  const email = between(line, '<>');
  const expected = '';
  assert.equal(email, expected);
}
