// variables will be included in the define plugin of webpack
// and will become available globally for use in your components
module.exports = {
  environments: [
    {
      environment: 'production',
      api: 'productionserver.com/api',
      site: 'productionserver.com',
      gulpTaskAlias: [
        'b',
        'build',
        'deploy'
      ],
      port: 80,
      debug: false
    }
  ]
};
