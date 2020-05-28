module.exports = {
  stories: ["../stories/**/*.(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-jest",
    "@storybook/addon-viewport",
    // {
    //   name: "@storybook/preset-typescript",
    //   options: {
    //     tsLoaderOptions: {
    //       ignoreDiagnostics: [7005]
    //     }
    //   }
    // },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
};
