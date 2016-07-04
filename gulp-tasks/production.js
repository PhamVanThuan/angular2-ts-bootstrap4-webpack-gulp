module.exports = function(config){
  config.gulp.task('live', ['production']);
  config.gulp.task('production', ['connect-live']);
};
