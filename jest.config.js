module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  moduleDirectories: [
    "src",
    "node_modules"
  ],
  testMatch: [
    "**/*spec.js"
  ],
  setupFiles: [
    "<rootDir>/test/setup.js"
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js"
  ],
  coverageDirectory : "coverage"
};
