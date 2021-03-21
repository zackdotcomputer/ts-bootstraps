module.exports = {
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: [
    "airbnb-typescript/base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "prettier"
  ],
  plugins: ["prettier"],
  rules: {
    "import/extensions": ["off"],
    "no-else-return": ["off"]
  }
};
