// @flow
const { exec } = require('child_process');

exports.executeCommand = (cwd) => (line) => new Promise(resolve => {
  exec(line, { cwd }, (error, stdout) => {
    process.stdout.write(stdout, resolve);
  });
});
