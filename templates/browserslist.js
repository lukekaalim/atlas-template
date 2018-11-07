// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const BROWSERLIST_CONFIG_FILE_NAME = '.browserslistrc';
const BROSWERSLIST_BASIC_CONFIG = Buffer.from(`# Browsers that we support

last 2 chrome versions
last 2 firefox versions`);


exports.browserslistBasicConfig = (cmd, baseDir) => (
  writeFileFromBuffer(resolve(baseDir, BROWSERLIST_CONFIG_FILE_NAME), BROSWERSLIST_BASIC_CONFIG)
);
