// src/formatters/stylish.js
export function stylish(diff) {
  return diff
    .map(item => {
      if (item.status === 'added') {
        return `+ ${item.key}: ${JSON.stringify(item.value)}`;
      }
      if (item.status === 'removed') {
        return `- ${item.key}: ${JSON.stringify(item.value)}`;
      }
      if (item.status === 'changed') {
        return `- ${item.key}: ${JSON.stringify(item.oldValue)}\n+ ${item.key}: ${JSON.stringify(item.newValue)}`;
      }
      return `  ${item.key}: ${JSON.stringify(item.value)}`;
    })
    .join('\n');
}