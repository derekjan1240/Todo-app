module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "indent": ["error", 4],
    'max-len': [1, 120, 2],
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        "path": ["config"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
  }
  }
};
