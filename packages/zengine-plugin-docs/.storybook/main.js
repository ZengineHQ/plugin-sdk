module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-viewport/register'
  ],
};
