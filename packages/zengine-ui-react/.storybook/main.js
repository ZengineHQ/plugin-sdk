module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-jest",
    "@storybook/addon-docs",
  ]
};
