#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Создаём два обязательных аргумента
program.addArgument(
  new program.Argument('<filepath1>', 'Path to first file')
);

program.addArgument(
  new program.Argument('<filepath2>', 'Path to second file')
);

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format (json, plain, stylish)', 'stylish')
  .option('-h, --help', 'display help for command');

// Парсим аргументы
program.parse(process.argv);

const args = program.args;

if (args.length < 2) {
  console.error('Please provide two file paths.');
  program.help();
} else {
  const [filepath1, filepath2] = args;
  const { format } = program;

  // Преобразуем пути к абсолютным
  const resolvedFile1 = path.resolve(process.cwd(), filepath1);
  const resolvedFile2 = path.resolve(process.cwd(), filepath2);

  try {
    const result = genDiff(resolvedFile1, resolvedFile2, format);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    program.help();
  }
}