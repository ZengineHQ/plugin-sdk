// const path = require('path');

module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-jest",
    "@storybook/addon-viewport",
    {
      name: "@storybook/addon-docs"
    }
  ],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.tsx?$/,
  //     include: path.resolve(__dirname, "../src"),
  //     use: [
  //       require.resolve("ts-loader"),
  //       {
  //         loader: require.resolve("react-docgen-typescript-loader"),
  //         options: {
  //           // Provide the path to your tsconfig.json so that your stories can
  //           // display types from outside each individual story.
  //           tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
  //         },
  //       },
  //     ],
  //   });
  //   config.resolve.extensions.push(".ts", ".tsx");
  //   return config;
  // }
};
