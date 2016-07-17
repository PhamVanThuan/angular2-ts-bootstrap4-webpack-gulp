var template = require('gulp-template');
var rename = require('gulp-rename');
var _ = require('lodash');

module.exports = function(gulp){
  gulp.task('internal-template:custom-typings', function(done){
    var allGlobals = '';
    var allDeclared = '';
    _.forEach(gulp.config.globals, function(value, key){
      allDeclared += 'declare var ' + key + ': any;\n';
      allGlobals += '  ' + key + ';\n';
    });
    gulp.src('./config/templates/custom-typings')
    .pipe(template({globals: allGlobals, declared: allDeclared}))
    .pipe(rename('custom-typings.d.ts'))
    .pipe(gulp.dest('./config/'));
    done();
  });
};
