// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const HTML_SOURCE_TEMPLATE_FILE_NAME = './src/index.html';
const HTML_SOURCE_TEMPLATE_CONTENTS = Buffer.from(`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %><title>
    <script defer src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script defer src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  </head>
  <body>
  </body>
</html>
`);

exports.htmlSourceTemplate = (cmd, baseDir) => (
  writeFileFromBuffer(resolve(baseDir, HTML_SOURCE_TEMPLATE_FILE_NAME), HTML_SOURCE_TEMPLATE_CONTENTS)
);
