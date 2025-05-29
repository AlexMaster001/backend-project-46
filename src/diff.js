// src/diff.js
const path = require('path');

function getDiff(obj1, obj2) {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const sortedKeys = [...keys].sort(); // Сортировка ключей по алфавиту

  return sortedKeys.map(key => {
    const value1 = key in obj1 ? obj1[key] : undefined;
    const value2 = key in obj2 ? obj2[key] : undefined;

    if (value1 === undefined) {
      return { key, value: value2, status: 'added' };
    }

    if (value2 === undefined) {
      return { key, value: value1, status: 'removed' };
    }

    if (value1 === value2) {
      return { key, value: value1, status: 'unchanged' };
    }

    return { key, oldValue: value1, newValue: value2, status: 'changed' };
  });
}

module.exports = { getDiff };