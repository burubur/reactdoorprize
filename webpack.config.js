const HtmlPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlPlugin({
      title: 'Doorprize'
    })
  ]
}

module.exports = config
