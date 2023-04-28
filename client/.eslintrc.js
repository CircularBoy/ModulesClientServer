// eslint-disable-next-line
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'unused-imports'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
};
// "eslintConfig": {
//   "extends": [
//     "airbnb-typescript",
//     "airbnb/hooks",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:jest/recommended",
//     "plugin:prettier/recommended"
//   ],
//     "plugins": ["react", "@typescript-eslint", "jest"],
//     "env": {
//     "browser": true,
//       "es6": true,
//       "jest": true
//   },
//   "globals": {
//     "Atomics": "readonly",
//       "SharedArrayBuffer": "readonly"
//   },
//   "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": 2018,
//       "sourceType": "module",
//       "project": "./tsconfig.json"
//   },
//   "rules": {
//     "linebreak-style": "off",
//       "prettier/prettier": [
//       "error",
//       {
//         "endOfLine": "auto"
//       }
//     ]
//   }
// },
