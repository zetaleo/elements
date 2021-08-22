module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-useless-escape': 'warn',
    'no-unused-vars': 'warn',
    'no-plusplus': 'warn',
    eqeqeq: 'warn',
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'max-len': [
      'warn',
      {
        ignoreComments: true,
      },
    ],
  },
};
