const Webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin')
const DistCleaner = require('clean-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HtmlPlugin({
      title: 'Doorprize',
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      template: __dirname + '/src/template.ejs'
    }),
    new DistCleaner(['dist']),
    new Webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
