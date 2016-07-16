var webpack = require('gulp-webpack');

module.exports = function(gulp){
  gulp.task('scripts:browser', function() {
    return gulp.src(['webpack-hot-middleware/client','./internal-config/browser-entry/browser-entry.ts'])
    //return gulp.src('./config/browser/boot.ts')
      .pipe(webpack( require('../webpack/browser.js') ))
      .pipe(gulp.dest('./app/public'));
  });
  gulp.task('scripts:server', function() {
    //return gulp.src(['webpack-hot-middleware/client','./config/server/boot.ts'])
    return gulp.src('./internal-config/server-entry/server-entry.ts')
      .pipe(webpack(require('../webpack/server.js')))
      .pipe(gulp.dest('./app'))
    ;
  });
};
