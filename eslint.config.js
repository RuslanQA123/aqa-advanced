import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
    settings: {},
  },
  configPrettier,
];