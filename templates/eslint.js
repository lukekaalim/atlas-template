// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const ESLINT_CONFIG_FILE_NAME = './.eslintrc.json';
const ESLINT_IGNORE_FILE_NAME = './.eslintignore';
const ESLINT_BASIC_CONFIG_CONTENTS = Buffer.from(`{
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": [
    "flowtype"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
}`);
const ESLINT_IGNORE_CONTENTS = Buffer.from(`dist
*.config.js`);

exports.eslintBasicConfig = async (cmd, baseDir) => {
  await writeFileFromBuffer(resolve(baseDir, ESLINT_CONFIG_FILE_NAME), ESLINT_BASIC_CONFIG_CONTENTS);
  await writeFileFromBuffer(resolve(baseDir, ESLINT_IGNORE_FILE_NAME), ESLINT_IGNORE_CONTENTS);
};
