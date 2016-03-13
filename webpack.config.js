var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/app/boot.ts',
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    root: './src',
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
          test:   /\.html/,
          loader: 'html',
      }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  }
};
