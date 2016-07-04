import nodemon from 'gulp-nodemon';

module.exports = function(config){
  config.gulp.task('server', function () {
    nodemon({
      script: './app/server.js',
      //ext: 'js html',
      //env: { 'NODE_ENV': 'development' }
    });
  });
};
