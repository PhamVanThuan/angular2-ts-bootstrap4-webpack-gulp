import nodemon from 'gulp-nodemon';

module.exports = function(gulp){
  gulp.task('internal-server', function () {
    nodemon({
      script: './dev/server.js',
      //ext: 'js html',
      //env: { 'NODE_ENV': 'development' }
    });
  });
};
