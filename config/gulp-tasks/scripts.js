import * as webpack from 'webpack';
import * as webpackBrowser from '../webpack/browser.js';
import * as webpackServer from '../webpack/server.js';
var gulpWebpack = require('gulp-webpack');

module.exports = function(gulp){
  gulp.task('internal-scripts-dev:browser', function(done) {
    webpackBrowser.plugins.push(new webpack.DefinePlugin(gulp.config.globals));
    gulp.src(['webpack-hot-middleware/client','./config/browser-entry/browser-entry.ts'])
    .pipe(gulpWebpack(webpackBrowser))
    .pipe(gulp.dest('./dev/public'));
    done();
  });
  gulp.task('internal-scripts-dev:server', function(done) {
    webpackServer.plugins.push(new webpack.DefinePlugin(gulp.config.globals));
    gulp.src('./config/server-entry/server-entry.ts')
    .pipe(gulpWebpack(webpackServer))
    .pipe(gulp.dest('./dev'));
    done();
  });
  gulp.task('internal-scripts-deploy:browser', function(done) {
    webpackBrowser.plugins.push(new webpack.DefinePlugin(gulp.config.globals));
    gulp.src(['./config/browser-entry/browser-entry.ts'])
    .pipe(gulpWebpack(webpackBrowser))
    .pipe(gulp.dest('./build/public'));
    done();
  });
  gulp.task('internal-scripts-deploy:server', function(done) {
    webpackServer.plugins.push(new webpack.DefinePlugin(gulp.config.globals));
    gulp.src('./config/server-entry/server-entry.ts')
    .pipe(gulpWebpack(webpackServer))
    .pipe(gulp.dest('./build'));
    done();
  });
};
