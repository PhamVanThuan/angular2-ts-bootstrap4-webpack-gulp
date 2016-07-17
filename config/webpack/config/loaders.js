module.exports = [
  {
    test: /\.ts$/,
    loaders: ['ts-loader', 'angular2-template-loader']
  },
  {
    test: /\.json$/,
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
      test:   /\.html$/,
      loader: 'html',
  }
];
