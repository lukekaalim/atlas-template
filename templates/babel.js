// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const BABEL_CONFIG_FILE_NAME = './.babelrc';
const BABEL_REACT_FLOW_CONFIG = Buffer.from(`{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-flow"
  ]
}`);

exports.babelReactFlowConfig = (cmd, baseDir) => (
  writeFileFromBuffer(resolve(baseDir, BABEL_CONFIG_FILE_NAME), BABEL_REACT_FLOW_CONFIG)
);
