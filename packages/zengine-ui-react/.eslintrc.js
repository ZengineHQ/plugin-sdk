module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'react-app'
  ],
  rules: {
    'comma-dangle': 0,
    'semi': 0,
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
