var webpack = require('webpack');
var path = require('path');

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports =  {
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js']
  },
  module: {
    preLoaders: [
      // needed to lower the filesize of angular due to inline source-maps
      { test: /\.js$/, loader: 'source-map-loader', exclude: [
        // these packages have problems with their sourcemaps
        root('node_modules/rxjs'),
        root('node_modules/@angular'),
      ]}
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['raw-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test:   /\.html/,
        loader: 'html-loader',
      }
    ],
    noParse: [ /zone\.js/, /angular2\/bundles\/.+/, /webpack-hot-middleware/ ]
  },
  target: 'node',
  entry: [
    //'webpack-hot-middleware/client',
    './config/server/boot.ts'
  ],
  output: {
    path: require("path").resolve("./build/js"),
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin()
  ]
};
