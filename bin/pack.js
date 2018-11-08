#!/usr/bin/env node

const { install } = require('../commands/npm');

const { copyPack, getPackDirectory } = require('../lib/copyPack');
const { makeAll } = require('../commands/make');

const main = async () => {
  const currentDirectory = process.cwd();
  const [nodeDirectory, scriptDirectory, packType] = process.argv;

  const packDirectory = getPackDirectory(packType);

  await copyPack(packDirectory, currentDirectory);
  await install(currentDirectory);
  await makeAll(currentDirectory);
};

main();