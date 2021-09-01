const path = require('path');

module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@next/next/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': [2, path.join(__dirname, '../../packages/web')],
    'comma-dangle': ['error', 'never'],
    'no-console': 'error',
    semi: ['error', 'always'],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'acc']
      }
    ],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        },
        multilineDetection: 'brackets'
      }
    ]
  },
  settings: {
    next: {
      rootDir: './packages/web/'
    }
  },
  ignorePatterns: ['dist', 'node_modules']
};
