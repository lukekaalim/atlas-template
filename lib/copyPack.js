//@flow
const { resolve, relative, join } = require('path');
const { createReadStream, createWriteStream, stat, readdir, mkdir } = require('fs');

function UnknownPackTypeError(unknownPackType) {
  if (!unknownPackType) {
    return new Error(`"${unknownPackType}" is not a valid pack, because its nothing!\n(Or rather, it's falsy)`)
  }
  return new Error(`I don't know what type of pack "${unknownPackType}" is`);
};

const copyDirectory = (sourceDirectory, destinationDirectory) => new Promise(resolve => {
  readdir(sourceDirectory, (err, filesInDirectory) => {
    resolve(Promise.all((filesInDirectory || []).map(file => {
      const path = join(sourceDirectory, file);
      const newPath = join(destinationDirectory, file);
      stat(path, (err, stats) => {
        if (stats.isDirectory()) {
          new Promise(resolve => {
            mkdir(newPath, () => {
              resolve(copyDirectory(path, newPath));
            });
          });
        } else {
          return copyFile(path, newPath);
        }
      });
    })));
  });
});

const copyFile = (sourceFile, destination) => new Promise(resolve => {
  createReadStream(sourceFile)
    .pipe(createWriteStream(destination))
    .on('end', () => {
      console.log(`Copied\n${sourceFile}\nto\n${destination}`);
      resolve();
    });
});

exports.getPackDirectory = (packType) => {
  switch (packType) {
    case 'mini-react-lib':
      return resolve(__dirname, '../packs/mini-react-lib');
    default:
      throw new UnknownPackTypeError(packType);
  }
};

exports.copyPack = (packDirectory, destinationDirectory) => (
  copyDirectory(packDirectory, destinationDirectory)
);
