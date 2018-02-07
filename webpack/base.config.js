const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src'),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_compontents)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};