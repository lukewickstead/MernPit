/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: {
    app: ['./server/index.js'],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.resolve(__dirname, './server'),
    filename: 'bundle-back.js',
  },
  externals: [nodeExternals()],
};
