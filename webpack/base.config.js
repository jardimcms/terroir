const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: [
    './main.js'
  ],

  output: {
    path: path.resolve(__dirname, '../demo'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_compontents)/,
        use: 'babel-loader'
      }
    ]
  }
};