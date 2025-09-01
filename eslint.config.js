const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "coverage/**", "dist/**", "build/**"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      "indent": ["error", 2],
      "linebreak-style": "off", // Ignoring linebreak style differences
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
];
