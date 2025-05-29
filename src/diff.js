// src/diff.js
export function getDiff(obj1, obj2) {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const sortedKeys = [...keys].sort(); // сортируем ключи

  return sortedKeys.map(key => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (key in obj1 && key in obj2 && value1 === value2) {
      return { key, value: value1, status: 'unchanged' };
    }

    if (!(key in obj2)) {
      return { key, value: value1, status: 'removed' };
    }

    if (!(key in obj1)) {
      return { key, value: value2, status: 'added' };
    }

    return { key, oldValue: value1, newValue: value2, status: 'changed' };
  });
}