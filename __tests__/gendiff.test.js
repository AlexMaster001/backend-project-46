const path = require('path');
const { genDiff } = require('../src/index');

const getFixturePath = (filename) => path.resolve(__dirname, '..', 'test', 'fixtures', filename);

describe('genDiff', () => {
  it('should compare two JSON files and return correct diff in stylish format', () => {
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