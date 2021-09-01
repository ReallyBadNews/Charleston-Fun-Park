module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    ecmaVersion: 6,
    project: "./tsconfig.eslint.json",
    extraFileExtensions: [".json"],
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: true, bundledDependencies: true },
    ],
    "import/extensions": [
      "error",
      "never",
      { svg: "always", styled: "always", png: "always", jpg: "always" },
    ],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    quotes: ["error", "double"],
    // "react/jsx-sort-props": [
    //   "error",
    //   { callbacksLast: true, shorthandLast: true, reservedFirst: true },
    // ],
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
      // enable the rule specifically for TypeScript files
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        // "@typescript-eslint/ban-ts-comment": "off",
        // "@typescript-eslint/no-var-requires": ["error"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
