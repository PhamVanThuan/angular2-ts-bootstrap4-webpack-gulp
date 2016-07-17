import * as testObject from '../environments/test';
import * as _ from 'lodash';

module.exports = function(gulp){
  _.forEach(testObject.casper, function(casperTest){
    _.forEach(casperTest.gulpTaskAlias, function(task){
      gulp.task(task, ['internal-casper']);
    });
  });
  _.forEach(testObject.karma, function(karmaTest){
    _.forEach(karmaTest.gulpTaskAlias, function(task){
      gulp.task(task, ['internal-karma']);
    });
  });
  gulp.task('internal-karma', function(){

  });
  gulp.task('internal-casper', function(){

  });
};
