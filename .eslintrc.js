import js from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    ignores: ['dist/', 'node_modules/'],
  },
  js.configs.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    files: ['**/__tests__/**/*.[jt]s?(x)'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'arrow-parens': ['error', 'as-needed'],
    },
  },
];