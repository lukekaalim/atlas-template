// @flow
const mkdirp = require('mkdirp');
const { dirname } = require('path');
const { createWriteStream, writeFile } = require('fs');

const writeFileFromStream = (filePath, fileContentStream) => new Promise(resolve => {
  const directory = dirname(filePath);

  const onDirectoryCreated = () => {
    fileContentStream.pipe(createWriteStream(filePath)).on('finish', resolve)
  };

  mkdirp(directory, onDirectoryCreated);
});

const writeFileFromBuffer = (filePath, fileBuffer) => new Promise(resolve => {
  const directory = dirname(filePath);

  const onDirectoryCreated = () => {
    writeFile(filePath, fileBuffer, () => {
      console.log(`Wrote file ${filePath}`);
      resolve();
    });
  };

  mkdirp(directory, onDirectoryCreated);
});

exports.writeFileFromStream = writeFileFromStream;
exports.writeFileFromBuffer = writeFileFromBuffer;
