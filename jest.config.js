module.exports = {
  transform: {
    '^.+\\.(tsx?|jsx?|js?)$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    // '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '@mui-treasury/components(.*)$': '<rootDir>/packages/mui-components/src/$1',
    '@mui-treasury/layout(.*)$': '<rootDir>/packages/mui-layout/src/$1',
    '@mui-treasury/mockup(.*)$': '<rootDir>/packages/mui-mockup/src/$1',
    '@mui-treasury/styles(.*)$': '<rootDir>/packages/mui-styles/src/$1',
    '@mui-treasury/styling(.*)$': '<rootDir>/packages/mui-styling/src/$1',
    '@mui-treasury/utils(.*)$': '<rootDir>/packages/mui-utils/src/$1',
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `.cache`,
    'public/',
    'build/',
    'assets/',
    'starters/',
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  modulePaths: ['<rootDir>/'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
