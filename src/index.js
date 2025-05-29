// src/index.js
import { createRequire } from 'module';
const requireFs = createRequire(import.meta.url);
const fs = requireFs('fs');
import path from 'path';
import { getDiff } from './diff.js';
import { stylish } from './formatters/stylish.js';

export function readFileSync(filePath, encoding) {
  return fs.readFileSync(filePath, encoding);
}

export function parseFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const fileExt = path.extname(filePath).toLowerCase();

  switch (fileExt) {
    case '.json':
      return JSON.parse(content);
    default:
      throw new Error(`Unsupported file format: ${fileExt}`);
  }
}

export default function genDiff(file1, file2, format = 'stylish') {
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