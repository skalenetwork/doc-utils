/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
	coverageDirectory: "coverage",
  coverageProvider: "v8",
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.base.json",
		},
	},
	testEnvironment: "jsdom",
	preset: "ts-jest",
};
