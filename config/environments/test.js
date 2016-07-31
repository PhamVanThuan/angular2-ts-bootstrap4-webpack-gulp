/*
  Note all globals are passed to webpack
  define plugin and MUST be a STRING.
  What is inside this string will be
  replaced presciley on compile.
  see:
    https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin
*/
module.exports = {
  karma: [
    {
      name: 'basic test set',
      gulpTaskAlias: [
        'k',
        'karma'
      ],
      globals: {
        ENVIRONMENT: '"production"',
        BUILDFOLDER: '"dev"',
        API: '"example.com/api"',
        SITE: '"example.com"',
        PORT: '8000',
        DEBUG: 'true'
      },
      pretest: 'config/test/pretest.js',
      filepattern: '**/servicetest.js',
    }
  ]
};
