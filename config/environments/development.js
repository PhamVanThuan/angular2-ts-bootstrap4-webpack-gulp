/*
  Note all globals are passed to webpack
  define plugin and MUST be a STRING.
  What is inside this string will be
  replaced presciley on compile.
  see:
    https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin
*/
module.exports = {
  environments: [
    {
      name: 'development environment',
      globals: {
        ENVIRONMENT: '"development"',
        BUILDFOLDER: '"dev"',
        API: '"localhost:1337"',
        SITE: '"localhost"',
        PORT: '8000',
        DEBUG: 'true'
      },
      gulpTaskAlias: [
        'development',
        'devel',
        'dev',
        'd'
      ]
    },
    {
      name: 'staging environment',
      globals: {
        ENVIRONMENT: '"staging"',
        BUILDFOLDER: '"dev"',
        API: '"staging.example.com/api"',
        SITE: '"example.com"',
        PORT: '8000',
        DEBUG: 'true'
      },
      gulpTaskAlias: [
        'staging',
        'testserver',
        's',
      ]
    },
    {
      name: 'production environment',
      globals: {
        ENVIRONMENT: '"production"',
        BUILDFOLDER: '"dev"',
        API: '"example.com/api"',
        SITE: '"example.com"',
        PORT: '8000',
        DEBUG: 'true'
      },
      gulpTaskAlias: [
        'production',
        'p',
      ]
    }
  ]
};
