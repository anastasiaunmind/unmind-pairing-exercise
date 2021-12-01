module.exports = {
    verbose: true,
    moduleDirectories: ["node_modules", "src/server"],
    modulePathIgnorePatterns: [
        "<rootDir>/.vscode/",
        "<rootDir>/.templates/",
        "<rootDir>/cypress/",
        "<rootDir>/src/client",
    ],
};