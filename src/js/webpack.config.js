var autoprefixer = require('autoprefixer');
var precss      = require('precss');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './router.js',
  output: {
    path: '../../dist/app',
    filename: 'bundle.js',
  },
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
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: [
    precss,
    autoprefixer,
  ],

};
