module.exports = function(gulp){
  gulp.task('live', ['production']);
  gulp.task('production', ['connect-live']);
};
