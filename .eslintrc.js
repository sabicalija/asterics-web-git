module.exports = {
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  extends: "eslint:recommended",
  rules: {
    "no-unused-vars": 2,
    "no-undef": 2,
    "no-console": 0,
    "max-len": ["error", { code: 160 }]
  },
  parserOptions: {
    sourceType: "module"
  }
};
