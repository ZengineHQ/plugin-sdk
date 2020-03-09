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
    "<rootDir>/test/**/*.test.{ts,tsx}"
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    // '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  modulePaths: [],
  // moduleNameMapper: {
  //   '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  // },
  moduleFileExtensions: [
    'js',
    'node',
    'ts',
    'tsx',
    'json'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
