// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const MAKE_FILE_NAME = './makefile';
const BASIC_WEBPACK_MAKE_CONTENTS = Buffer.from(`BIN = node_modules/.bin

WEBPACK_BIN = $(BIN)/webpack
WEBPACK_DEV_SERVER_BIN = $(BIN)/webpack-dev-server
WEBPACK_CONFIG = webpack.config.js

.PHONY: all dev

all:
	$(WEBPACK_BIN) --config \${WEBPACK_CONFIG} --mode=production

dev:
	$(WEBPACK_DEV_SERVER_BIN) --config \${WEBPACK_CONFIG} --mode=development`);

exports.makeBasicConfig = (cmd, baseDir) => (
  writeFileFromBuffer(resolve(baseDir, MAKE_FILE_NAME), BASIC_WEBPACK_MAKE_CONTENTS)
);
