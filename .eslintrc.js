 const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('pol-standard/eslint/browser'),
    require.resolve('pol-standard/eslint/react'),
    require.resolve('pol-standard/eslint/next'),
    require.resolve('pol-standard/eslint/typescript'),
   ],
  parserOptions: {
    project,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'func-names': 'off',
    'react/display-name': 'off',
    'import/no-default-export': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'react/function-component-definition': 'off',
    'no-undef': 'off',
    'unicorn/filename-case': 'off',
    'import/order': ['off'],
    camelcase: 'off',
  },
  ignorePatterns: ['sw.js'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};