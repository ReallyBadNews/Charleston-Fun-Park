module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  plugins: ["react-hooks"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:mdx/recommended",
    // "prettier/react",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-sort-props": [
      "error",
      {
        noSortAlphabetically: false,
        ignoreCase: true,
        callbacksLast: true,
        shorthandLast: true,
        reservedFirst: true,
      },
    ],
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    "max-len": [2, 140, 2],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": ["error", { ignore: ["fusion:*"] }],
    "import/extensions": [
      "error",
      "never",
      {
        css: "always",
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-underscore-dangle": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": ["error", { allow: ["error"] }],
    // "unicorn/filename-case": "off"
  },
  overrides: [
    {
      files: ["scripts/*", "config/**"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["**/*.test.js"],
      rules: {
        "no-unused-vars": [
          "error",
          {
            varsIgnorePattern: "Consumer",
          },
        ],
      },
    },
  ],
};
