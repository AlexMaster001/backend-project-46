// test/test.js
import { genDiff } from '../src/index.js';
import path from 'path';

const getFixturePath = (filename) => path.resolve(__dirname, '..', 'test', 'fixtures', filename);

describe('gendiff CLI functionality', () => {
  it('should generate correct diff for two JSON files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    const expected = `
- follow: false
  host: "hexlet.io"
- proxy: "123.234.53.22"
- timeout: 50
+ timeout: 20
+ verbose: true`;

    const result = genDiff(filepath1, filepath2);
    expect(result.trim()).toBe(expected.trim());
  });
});