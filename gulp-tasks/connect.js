module.exports = function(config){
  config.gulp.task('connect', function() {
    config.connect.server({
      root: ['./build'],
      port: 3001
    });
  });
};
