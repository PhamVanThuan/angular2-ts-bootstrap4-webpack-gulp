var webpack = require('gulp-webpack');

module.exports = function(gulp){
  gulp.task('scripts:browser', function() {
    return gulp.src(['webpack-hot-middleware/client','./config/browser/boot.ts'])
    //return gulp.src('./config/browser/boot.ts')
      .pipe(webpack( require('../webpack.browser.config.js') ))
      .pipe(gulp.dest('./app/public'));
  });
  gulp.task('scripts:server', function() {
    //return gulp.src(['webpack-hot-middleware/client','./config/server/boot.ts'])
    return gulp.src('./config/server/boot.ts')
      .pipe(webpack(require('../webpack.server.config.js')))
      .pipe(gulp.dest('./app'))
    ;
  });
};
