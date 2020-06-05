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
    '@typescript-eslint/semi': 0,
    'react/prop-types': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: [
          'UPPER_CASE',
          'camelCase',
          'PascalCase',
        ]
      }
    ],
    '@typescript-eslint/no-var-requires': 0
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
