module.exports = function(config){
  config.gulp.task('dev', ['scripts', 'connect'], function() {
    config.gulp.watch(['!./src/**/**.ts', './src/**/**.*'], ['scripts']);
    config.gulp.watch('./src/**/**.ts', ['scripts']);
  });
};
