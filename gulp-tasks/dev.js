module.exports = function(config){
  config.gulp.task('dev', ['scripts:browser', 'scripts:server', 'server'], function() {
    config.gulp.watch(['!./src/**/**.ts', './src/**/**.*'], ['scripts:browser', 'scripts:server', 'server']);
    config.gulp.watch('./src/**/**.ts', ['scripts:browser', 'scripts:server', 'server']);
  });
};
