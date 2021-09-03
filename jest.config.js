module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx',
    '!<rootDir>/src/index.tsx',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/**/*.style.tsx',
  ],
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  testRegex: ['.test.tsx'],
  testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
