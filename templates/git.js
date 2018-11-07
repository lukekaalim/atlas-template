// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const GIT_IGNORE_FILE_NAME = './.gitignore';
const GIT_IGNORE_CONTENTS = Buffer.from(`node_modules`);

exports.basicGitIgnore = (cmd, baseDir) => (
  writeFileFromBuffer(resolve(baseDir, GIT_IGNORE_FILE_NAME), GIT_IGNORE_CONTENTS)
);
