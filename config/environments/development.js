// variables will be included in the define plugin of webpack
// and will become available globally for use in your components
module.exports = {
  environments: [
    {
      name: 'development environment',
      globals: {
        ENVIRONMENT: 'development',
        API: 'localhost:1337',
        SITE: 'example.com',
        PORT: 9000,
        DEBUG: true
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
        ENVIRONMENT: 'staging',
        API: 'testserver.example.com/api',
        SITE: 'example.com',
        PORT: 9000,
        DEBUG: true
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
        ENVIRONMENT: 'production',
        API: 'example.com/api',
        SITE: 'example.com',
        PORT: 9000,
        DEBUG: false
      },
      gulpTaskAlias: [
        'production',
        'p',
      ]
    }
  ]
};
