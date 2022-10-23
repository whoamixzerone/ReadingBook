module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['airbnb-typescript/base', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
  },
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js'],
};