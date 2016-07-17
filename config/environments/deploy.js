// variables will be included in the define plugin of webpack
// and will become available globally for use in your components
module.exports = {
  environments: [
    {
      name: 'production environment',
      globals: {
        ENVIRONMENT: 'production',
        API: 'productionserver.com/api',
        SITE: 'productionserver.com',
        PORT: 80,
        DEBUG: false
      },
      gulpTaskAlias: [
        'deploy',
        'build',
        'b',
      ],
    }
  ]
};
