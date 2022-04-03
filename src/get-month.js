'use strict';

function getMonth(month) {
  if (month === 12 || (month >= 1 && month <= 2)) {
    return 'Зима';
  } else if (month >= 3 && month <= 5) {
    return 'Весна';
  } else if (month >= 6 && month <= 8) {
    return 'Лето';
  } else if (month >= 9 && month <= 11) {
    return 'Осень';
  } else {
    return 'такого месяца не бывает';
  }
}

module.exports = { getMonth };
