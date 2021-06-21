module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts", "jest-extended"],
  modulePathIgnorePatterns: ["dist", "cli"],
  transform: {
    "^.+\\.(ts|tsx|js)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(@material-ui/core|@babel/runtime)/)",
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleNameMapper: {
    "@mui-treasury/(.*)": ["<rootDir>/packages/$1/src/"],
    "test/(.*)": ["<rootDir>/test/$1"],
  },
};
