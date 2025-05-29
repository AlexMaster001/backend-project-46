// src/parsers.js
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const ini = require('ini');

function readFileSync(filePath, encoding) {
  return fs.readFileSync(filePath, encoding);
}

function parseFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const fileExt = path.extname(filePath).toLowerCase();

  switch (fileExt) {
    case '.json':
      return JSON.parse(content);
    case '.yaml':
    case '.yml':
      return yaml.load(content);
    case '.ini':
      return ini.parse(content);
    default:
      throw new Error(`Unsupported file format: ${fileExt}`);
  }
}

module.exports = {
  readFileSync,
  parseFile,
};