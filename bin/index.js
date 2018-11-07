#!/usr/bin/env node

// @flow
const { createInterface } = require('readline');

const { initGit } = require('../commands/git');
const { initNpm } = require('../commands/npm');

const { packageJsonBasic } = require('../templates/package');
const { babelReactFlowConfig } = require('../templates/babel');
const { browserslistBasicConfig } = require('../templates/browserslist');
const { webpackExternalReactConfig } = require('../templates/webpack');
const { basicGitIgnore } = require('../templates/git');
const { flowStrictConfig } = require('../templates/flow');
const { makeBasicConfig } = require('../templates/make');
const { eslintBasicConfig } = require('../templates/eslint');
const { htmlSourceTemplate } = require('../templates/html');

const main = async () => {
  const currentDirectory = process.cwd();
  const { stdin, stdout } = process;

  const interface = createInterface({ input: stdin, output: stdout });

  stdout.write(`Current Directory is ${currentDirectory}. We will make the project here`);

  await packageJsonBasic(interface, currentDirectory);

  await initGit(currentDirectory);
  await basicGitIgnore(interface, currentDirectory);
  await initNpm(currentDirectory);

  await babelReactFlowConfig(interface, currentDirectory);
  await browserslistBasicConfig(interface, currentDirectory);
  await webpackExternalReactConfig(interface, currentDirectory);
  await flowStrictConfig(interface, currentDirectory);
  await makeBasicConfig(interface, currentDirectory);
  await eslintBasicConfig(interface, currentDirectory);
  await htmlSourceTemplate(interface, currentDirectory);
  interface.close();
};

main();
