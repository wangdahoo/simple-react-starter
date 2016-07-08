var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getDateTag() {
  var d = new Date();
  var yyyy = d.getFullYear() + '';
  var MM = (100 + (d.getMonth() + 1) + '').substr(1, 2);
  var dd = (100 + d.getDate() + '').substr(1, 2);
  return yyyy + MM + dd
}

module.exports = {

  entry: [
    path.resolve(__dirname, 'src/app.js')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-' + getDateTag() + '-[hash:8].js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
