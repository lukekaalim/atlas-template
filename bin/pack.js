#!/usr/bin/env node


const { copyPack, getPackDirectory } = require('../lib/copyPack');
const { makeAll } = require('../commands/make');
const { installNpm } = require('../commands/npm');
const { initGit } = require('../commands/git');

const main = async () => {
  const currentDirectory = process.cwd();
  const [nodeDirectory, scriptDirectory, packType] = process.argv;

  const packDirectory = getPackDirectory(packType);

  await copyPack(packDirectory, currentDirectory);
  await installNpm(currentDirectory);
  await initGit(currentDirectory);
};

main();
