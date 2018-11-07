// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const FLOW_CONFIG_FILE_NAME = './.flowconfig';
const FLOW_CONFIG_CONTENTS = Buffer.from(`[ignore]

[include]

[libs]

[lints]
all=error
[options]
emoji=true
[strict]
nonstrict-import
unclear-type
unsafe-getters-setters
untyped-import
untyped-type-import
sketchy-null
`);


exports.flowStrictConfig = (cmd, baseDir) => (
  writeFileFromBuffer(resolve(baseDir, FLOW_CONFIG_FILE_NAME), FLOW_CONFIG_CONTENTS)
);
