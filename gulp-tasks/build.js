module.exports = function(config){
  config.gulp.task('build', ['scripts:browser', 'scripts:server']);
};
