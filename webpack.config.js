// var webpack = require('webpack');
// var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

// module.exports = {
//   context: __dirname,
//   // Include the hot middleware with each entry point
//   entry: {
//     // Add the client which connects to our middleware
//     app: ['./src/js/router.js', hotMiddlewareScript]
// //    extra: ['./extra.js', hotMiddlewareScript]
//   },
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: '[name].js'
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       exclude: /(node_modules)/,
//       loader: ['babel'],
//       query: {
//         presets: ['es2015', 'react'],
//       },
//     },
//       {
//         test: /\.css$/,
//         loader: 'style-loader!css-loader!postcss-loader',
//       },
//     ],
//   },
//   devtool: '#source-map',
//   plugins: [
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],
// };

var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    './src/js/router.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'app.js'
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
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};