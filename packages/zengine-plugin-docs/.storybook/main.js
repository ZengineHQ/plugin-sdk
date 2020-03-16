module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-jest/register',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ],
};
