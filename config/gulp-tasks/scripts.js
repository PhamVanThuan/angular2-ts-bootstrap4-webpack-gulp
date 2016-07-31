import * as webpack from 'webpack';
import * as webpackBrowser from '../webpack/browser.js';
import * as webpackServer from '../webpack/server.js';

var gulpWebpack = require('gulp-webpack');

module.exports = function(gulp){
  gulp.task('internal-scripts-dev:browser', function(done) {
    gulp.src(['./config/browser-entry/browser-entry.ts'])
    .pipe(gulpWebpack(webpackBrowser))
    .pipe(gulp.dest('./' + gulp.config.globals.BUILDFOLDER.replace(/\"/g,'').replace(/'/g,'') + '/public'));
    done();
  });
  gulp.task('internal-scripts-dev:server', function(done) {
    if(gulp.config.globals.DEBUG.toLowerCase() === 'true'){
      gulp.config.globals.ALLGLOBALS = JSON.stringify(gulp.config.globals);
    }
    webpackServer.plugins.push(new webpack.DefinePlugin(gulp.config.globals));
    gulp.src('./config/server-entry/server-entry.ts')
    .pipe(gulpWebpack(webpackServer))
    .pipe(gulp.dest('./' + gulp.config.globals.BUILDFOLDER.replace(/\"/g,'').replace(/'/g,'')));
    done();
  });
  gulp.task('internal-scripts-deploy:browser', function(done) {
    webpackBrowser.plugins.push(new webpack.DefinePlugin(gulp.config.globals));
    gulp.src(['./config/browser-entry/browser-entry.ts'])
    .pipe(gulpWebpack(webpackBrowser))
    .pipe(gulp.dest('./' + gulp.config.globals.BUILDFOLDER.replace(/\"/g,'').replace(/'/g,'') + '/public'));
    done();
  });
  gulp.task('internal-scripts-deploy:server', function(done) {
    webpackServer.plugins.push(new webpack.DefinePlugin(gulp.config.globals));
    gulp.src('./config/server-entry/server-entry.ts')
    .pipe(gulpWebpack(webpackServer))
    .pipe(gulp.dest('./' + gulp.config.globals.BUILDFOLDER.replace(/\"/g,'').replace(/'/g,'')));
    done();
  });
};
