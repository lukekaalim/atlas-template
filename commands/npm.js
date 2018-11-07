// @flow
const { executeCommand } = require('../lib/executeCommand');

const REACT_PACKAGES = [
  'react',
  'react-dom'
];

const BABEL_PACKAGES = [
  'cli',
  'core'
].map(pack => `@babel/${pack}`);

const BABEL_REACT_PRESET_PACKAGES = [
  'env',
  'flow',
  'react'
].map(pack => `@babel/preset-${pack}`);

const WEBPACK_PACKAGES = [
  'webpack',
  'webpack-cli',
  'babel-loader',
  'html-webpack-plugin',
  'clean-webpack-plugin',
  'webpack-dev-server',
];

const LINTING_PACKAGES = [
  'flow-bin',
  'eslint',
  'babel-eslint',
  'eslint-plugin-flowtype',
];

const DEVELOPMENT_PACKAGES = [...WEBPACK_PACKAGES, ...BABEL_REACT_PRESET_PACKAGES, ...BABEL_PACKAGES, ...LINTING_PACKAGES].join(' ');
const DEPENDENCY_PACKAGES = [...REACT_PACKAGES].join(' ');

exports.initNpm = async (cwd) => {
  const executor = executeCommand(cwd);

  await executor(`npm i -S ${DEPENDENCY_PACKAGES}`);
  await executor(`npm i -D ${DEVELOPMENT_PACKAGES}`);
};
