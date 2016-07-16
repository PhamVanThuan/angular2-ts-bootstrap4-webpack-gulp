// variables will be included in the define plugin of webpack 
// and will become available globally for use in your components
module.exports = {
  environments: [
    {
      environment: 'development',
      api: 'localhost:1337',
      site: 'example.com',
      gulpTaskAlias: [
        'development',
        'devel',
        'dev',
        'd'
      ],
      port: 9000,
      debug: true
    },
    {
      environment: 'staging',
      api: 'testserver.example.com/api',
      site: 'example.com',
      gulpTaskAlias: [
        'staging',
        'testserver',
        's',
      ],      port: 9000,
      debug: true
    },
    {
      environment: 'production',
      api: 'example.com/api',
      site: 'example.com',
      gulpTaskAlias: [
        'production',
        'p',
      ],
      port: 9000,
      debug: true
    }
  ]
};
