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
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        loader: "babel-loader",
        query:
        {
          presets:['react']
        }
      }, {
        test: /\.css$/,
        include: /src/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }
        ]
      }
    ]
  }
};
