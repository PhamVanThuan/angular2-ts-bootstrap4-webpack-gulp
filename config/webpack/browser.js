var webpack = require('webpack');

module.exports = {
  entry: [
    './config/browser-entry/browser-entry.ts'
  ],
  output: {
    path: '/',
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
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
