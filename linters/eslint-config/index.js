const path = require('path');

module.exports = {
  root: true,
  extends: ['standard-with-typescript', '@react-native-community', 'plugin:@next/next/recommended'],
  plugins: ['unused-imports'],
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
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
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
          requireLast: false
        }
      }
    ]
  },
  settings: {
    next: {
      rootDir: './packages/web/'
    }
  },
  parserOptions: {
    project: ['./tsconfig.json', 'packages/**/tsconfig.json']
  },
  ignorePatterns: ['dist', 'node_modules']
};
