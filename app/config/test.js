// variables will be included in the define plugin of webpack
// and will become available globally for use in your components
module.exports = {
  casper: [
    {
      pretest: 'config/test/pretest.js',
      filepattern: '**/caspertest.js',
    }
  ],
  karma: [
    {
      pretest: 'config/test/pretest.js',
      filepattern: '**/servicetest.js',
    }
  ]
};
