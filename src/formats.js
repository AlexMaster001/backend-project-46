// src/formats.js
import { createRequire } from 'module';
const requireFs = createRequire(import.meta.url);
const fs = requireFs('fs');

export function readFileSync(filePath, encoding) {
  return fs.readFileSync(filePath, encoding);
}

export function parseFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const fileExt = filePath.split('.').pop().toLowerCase();

  switch (fileExt) {
    case 'json':
      return JSON.parse(content);
    default:
      throw new Error(`Unsupported file format: ${fileExt}`);
  }
}