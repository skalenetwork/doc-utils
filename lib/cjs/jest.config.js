"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presets_1 = require("ts-jest/presets");
exports.default = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    transform: Object.assign({}, presets_1.defaults.transform),
};
