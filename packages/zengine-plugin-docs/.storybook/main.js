const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../../../../tsconfig.json'),
          ignoreDiagnostics: [7005],
        },
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ],
};
