module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/test'
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.ts'
  ],
  testMatch: [
    '<rootDir>/test/**/*.test.ts'
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  modulePaths: [],
  moduleNameMapper: {
  },
  moduleFileExtensions: [
    'js',
    'ts',
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
