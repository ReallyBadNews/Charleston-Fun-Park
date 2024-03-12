module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/prefer-default-export": "off",
    "react/no-unknown-property": ["error", { ignore: ["sx", "css"] }],
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    quotes: ["error", "double"],
    "react/jsx-sort-props": [
      "error",
      { callbacksLast: true, shorthandLast: true, reservedFirst: true },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "either",
        depth: 25,
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for javascipt files
      files: ["**/*.js", "**/*.jsx"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
