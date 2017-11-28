const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Html = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new Html({
      title: 'Doorprize',
      hash: true,
      template: __dirname + '/src/template.ejs'
    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
});
