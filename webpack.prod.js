const merge = require('webpack-merge');
const Html = require('html-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new Html({
      title: 'Doorprize',
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      template: __dirname + '/src/template.ejs'
    }),
    new Uglify()
  ]
});
