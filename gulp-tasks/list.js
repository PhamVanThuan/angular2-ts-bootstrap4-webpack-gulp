module.exports = function(gulp){
  gulp.task('list', function() {
    console.log('*********************');
    console.log('*** user commands ***');
    console.log('*********************');
    console.log('    gulp dev/d -> builds scripts & runs server');
    console.log('    gulp build -> builds scripts');
    console.log('*************************');
    console.log('*** internal commands ***');
    console.log('*************************');
    console.log('    gulp connect -> starts server on port 3001');
    console.log('    gulp scripts -> build scripts');
    console.log('*********************');
  });
};
