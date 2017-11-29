const webpack = require('webpack');
const path = require('path');
const Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new Clean(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
          name: 'common'
        })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};