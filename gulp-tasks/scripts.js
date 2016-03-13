module.exports = function(config){
  config.gulp.task('scripts', function() {
  	return config.gulp.src('./src/app.ts')
      .pipe(config.webpack(require('../webpack.config.js')))
      .pipe(config.gulp.dest('./build'))
    ;
  });
};
