module.exports = {
    transform: {
        "^.+\\.ts[x]?$": "ts-jest",
    },
    moduleNameMapper: {
        "#(.*)": "<rootDir>/node_modules/$1",
        "@/(.*)": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    preset: "ts-jest/presets/default-esm",
    collectCoverageFrom: [
        "src/utils/**/*.{js,jsx,ts,tsx}",
        "!src/utils/index.ts",
        "!src/utils/**/index.ts",
        "src/hooks/**/*.{js,jsx,ts,tsx}",
        "!src/hooks/index.ts",
        "!src/hooks/**/index.ts",
        "src/features/**/hooks/**/*.{js,jsx,ts,tsx}",
        "!src/features/**/hooks/index.ts",
        "!src/features/**/hooks/**/index.ts",
    ],
    coverageReporters: [
        ["text", { file: "coverage.txt" }],
        ["json-summary", { file: "coverage-summary.json" }],
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    testEnvironment: "jest-environment-jsdom",
};
