import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...stylistic.configs.recommended.rules,
      'no-console': 'off',
      'import/extensions': 'off',
      'no-underscore-dangle': ['error', { allow: ['__dirname', '__filename'] }],
    },
  },
]
