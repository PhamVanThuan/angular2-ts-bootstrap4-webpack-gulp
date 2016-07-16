var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './internal-config/browser-entry/browser-entry.ts'
  ],
  output: {
    path: require("path").resolve("./build/js"),
    publicPath: '/',
    filename: 'browser.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js'],
  },
  module: {
    loaders: require('./config/loaders.js'),
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
