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
    '@typescript-eslint/restrict-template-expressions': 0,
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
      }
    ],
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
