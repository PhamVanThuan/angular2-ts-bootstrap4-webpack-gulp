import nodemon from 'gulp-nodemon';

module.exports = function(gulp){
  gulp.task('server', function () {
    nodemon({
      script: './app/server.js',
      //ext: 'js html',
      //env: { 'NODE_ENV': 'development' }
    });
  });
};
