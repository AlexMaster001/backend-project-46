// src/index.js
const fs = require('fs');
const path = require('path');
const { getDiff } = require('./diff');
const { stylish } = require('./formatters/stylish');
const { parseFile } = require('./parsers');

function genDiff(file1, file2, format = 'stylish') {
  if (!fs.existsSync(file1)) {
    throw new Error(`File not found: ${file1}`);
  }

  if (!fs.existsSync(file2)) {
    throw new Error(`File not found: ${file2}`);
  }

  const data1 = parseFile(file1);
  const data2 = parseFile(file2);

  const diff = getDiff(data1, data2);

  const formatters = {
    stylish,
  };

  const formatter = formatters[format];

  if (!formatter) {
    throw new Error(`Unknown format: ${format}`);
  }

  return formatter(diff);
}

module.exports = {
  genDiff,
};