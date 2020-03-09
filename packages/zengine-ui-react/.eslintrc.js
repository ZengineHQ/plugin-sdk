module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  "rules": {
    "comma-dangle": 0,
    "semi": 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
