module.exports = function(config){
  config.gulp.task('scripts:browser', function() {
  	return config.gulp.src('./config/browser/boot.ts')
      .pipe(config.webpack(require('../webpack.browser.config.js')))
      .pipe(config.gulp.dest('./build/browser'))
    ;
  });
  config.gulp.task('scripts:server', function() {
  	return config.gulp.src('./config/server/boot.ts')
      .pipe(config.webpack(require('../webpack.server.config.js')))
      .pipe(config.gulp.dest('./build/server'))
    ;
  });
};
