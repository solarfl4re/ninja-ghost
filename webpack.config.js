const path = require('path');
const cssPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'assets')
  },
  entry: {
    bundle: './src/webpack.entry.js'
  },
  plugins: [new cssPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [cssPlugin.loader, 'css-loader'],
      }
    ]
  }
};
