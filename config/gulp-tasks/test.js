import * as testObject from '../environments/test';
import * as _ from 'lodash';

module.exports = function(gulp){
  _.forEach(testObject.karma, function(karmaTest){
    _.forEach(karmaTest.gulpTaskAlias, function(task){
      gulp.config[task] = karmaTest.globals;
      gulp.task(task, function(){
        gulp.config.globals = gulp.config[gulp.seq[0]];
        gulp.run(['internal-karma']);
      });
    });
  });
  gulp.task('internal-karma', function(){

  });
};
