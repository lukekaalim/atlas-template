// @flow
const { executeCommand } = require('../lib/executeCommand');

exports.makeAll = (cwd) => (
  executeCommand(cwd)('make')
);
