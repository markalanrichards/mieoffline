var webpack = require("webpack")

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './router.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: '../../dist/app',
    filename: '[name].js',
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
  postcss: function () {
      return [require('autoprefixer'), require('precss')];
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('chunk', 'chunked.js')
  ]
};
