// bin/gendiff.cjs
const { program } = require('commander');
const path = require('path');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'Path to first file')
  .argument('<filepath2>', 'Path to second file')
  .option('-f, --format [type]', 'output format (json, plain, stylish)', 'stylish')
  .option('-h, --help', 'display help for command');

// Проверяем, был ли передан флаг --help
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  program.help();
} else {
  program.parse(process.argv);
}

const args = program.args;

if (args.length < 2) {
  console.error('Please provide two file paths.');
  program.help();
} else {
  const [filepath1, filepath2] = args;
  const { format } = program;

  const { genDiff } = require('../src/index');

  try {
    const result = genDiff(filepath1, filepath2, format);
    console.log(result);
  } catch (error) {
    console.error(error.message);
    program.help();
  }
}