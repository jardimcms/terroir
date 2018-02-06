const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'cheap-eval-source-map',

  devServer: {
    port: 9000
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Terroir Demo'
    })
  ]
});