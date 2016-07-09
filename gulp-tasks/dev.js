module.exports = function(gulp){
  gulp.task('dev', ['scripts:browser', 'scripts:server', 'server'], function() {
    gulp.watch(['!./src/**/**.ts', './src/**/**.*'], ['scripts:browser', 'scripts:server', 'server']);
    gulp.watch('./src/**/**.ts', ['scripts:browser', 'scripts:server', 'server']);
  });
};
