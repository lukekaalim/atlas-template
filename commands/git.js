// @flow
const { executeCommand } = require('../lib/executeCommand');

exports.initGit = (cwd) => (
  executeCommand(cwd)('git init')
);