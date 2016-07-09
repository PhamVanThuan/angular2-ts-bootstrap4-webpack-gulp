var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './config/browser/boot.ts'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'browser.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['raw-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
          test:   /\.html/,
          loader: 'html',
      }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
