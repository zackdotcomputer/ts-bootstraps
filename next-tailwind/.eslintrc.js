module.exports = {
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: [
    "airbnb-typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ["prettier"],
  rules: {
    "import/extensions": ["off"],
    "no-else-return": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/prop-types": [0],
    "react/require-default-props": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-wrap-multilines": [0],
    "react/jsx-props-no-spreading": [0],
    "no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["state"] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link", "LinkTo"]
      }
    ],
    "no-console": [
      2,
      {
        allow: ["warn", "error"]
      }
    ]
  }
};
