module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/test'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ],
  // setupFiles: [
  //   'react-app-polyfill/jsdom'
  // ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testMatch: [
    '<rootDir>/test/**/*.test.{js,jsx,ts,tsx}'
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    // '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  modulePaths: [],
  moduleNameMapper: {
    '^react$': '<rootdir>/../../node_modules/react',
    '^react-dom$': '<rootdir>/../../node_modules/react-dom',
    "\\.(css|less)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'node',
    'ts',
    'tsx',
    'json'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  globals: {
    'babel-jest': {
      diagnostics: true
    }
  }
};
