// @flow
const { resolve } = require('path');
const { writeFileFromBuffer } = require('../lib/writeFile');

const WEBPACK_CONFIG_FILE_NAME = './webpack.config.js';
const WEBPACK_EXTERNAL_REACT_CONFIG = Buffer.from(`
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  externals: {
    'react': 'react',
    'react-dom': 'reactDOM',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Atlas',
      template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    stats: 'minimal'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      }
    ]
  }
};`);

exports.webpackExternalReactConfig = (cmd, baseDir) => (
  writeFileFromBuffer(resolve(baseDir, WEBPACK_CONFIG_FILE_NAME), WEBPACK_EXTERNAL_REACT_CONFIG)
);
