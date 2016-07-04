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
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'raw-loader!css-loader!sass-loader'
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
        test: /\.css$/,
        loader: 'raw-loader!css-loader!postcss-loader'
      },
      {
        test:   /\.html/,
        loader: 'html-loader',
      }
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ],
  target: 'node',
  entry: [
    './config/server/boot.ts'
  ],
  output: {
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
  }
};
