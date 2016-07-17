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
  entry: [
    './config/server-entry/server-entry.ts'
  ],
  output: {
    path: require("path").resolve("./build/js"),
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
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
        root('node_modules/@angular')
      ]}
    ],
    loaders: require('./config/loaders.js'),
    noParse: [ /zone\.js/, /angular2\/bundles\/.+/ ]
  },
  target: 'node',
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};
