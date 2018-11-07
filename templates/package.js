// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');
const { askQuestion } = require('../lib/askQuestion');

const PACKAGE_JSON_FILE_NAME = './package.json';

const buildContents = (packageName) => Buffer.from(`{
  "name": "${packageName}",
  "version": "0.0.0",
  "author": "luke kaalim",
  "license": "MIT"
}`);

exports.packageJsonBasic = async (cmd, baseDir) => {
  const projectName = await askQuestion(cmd)('What\'s the Project\'s name? ');
  await writeFileFromBuffer(resolve(baseDir, PACKAGE_JSON_FILE_NAME), buildContents(projectName))
};