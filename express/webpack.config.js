var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModules = {};
fs.readdirSync('../node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './start.js',
  output: {
    filename: '../dist/express/bundle.js',
  },
  externals: nodeModules,
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: ['babel'],
      query: {
        presets: ['es2015', 'react'],
      },
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
    },
    ],
  },
  postcss: function () {
      return [require('autoprefixer'), require('precss')];
  },
  plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
