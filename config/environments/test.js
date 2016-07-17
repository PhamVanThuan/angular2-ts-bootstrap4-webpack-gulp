// variables will be included in the define plugin of webpack
// and will become available globally for use in your components
module.exports = {
  casper: [
    {
      name: 'screen capture test set',
      gulpTaskAlias: [
        'c',
        'casper'
      ],
      pretest: 'config/test/pretest.js',
      filepattern: '**/caspertest.js',
    }
  ],
  karma: [
    {
      name: 'basic test set',
      gulpTaskAlias: [
        'k',
        'karma'
      ],
      pretest: 'config/test/pretest.js',
      filepattern: '**/servicetest.js',
    }
  ]
};
