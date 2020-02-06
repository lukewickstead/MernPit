/* eslint-disable no-unused-vars */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'development',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'source-map',
  entry: ['./client/src/index.js', './client/sass/main.scss'],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin([
      { from: 'client/src/assets/downloads' },
      { from: 'client/src/assets/public', to: path.join(__dirname, 'dist/public') },
    ]),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '../',
    filename: 'index.bundle.js',
  },
};
