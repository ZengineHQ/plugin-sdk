module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks'
  ],
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'comma-dangle': 0,
    'semi': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
