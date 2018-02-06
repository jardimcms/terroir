const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: [
    './demo.js'
  ],

  output: {
    path: path.resolve(__dirname, '../demo'),
    filename: 'bundle.js'
  },

  devtool: 'cheap-eval-source-map',

  devServer: {
    port: 9000
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Terroir Demo',
      template: path.resolve(__dirname, '../demo/demo.tpl.html')
    })
  ]
});