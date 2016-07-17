import * as devObject from '../environments/development';
import * as deployObject from '../environments/deploy';
import * as testObject from '../environments/test';
import * as _ from 'lodash';

module.exports = function(gulp){
  gulp.task('list', function() {
    console.log('****************************');
    console.log('*** development commands ***');
    console.log('****************************');
    _.forEach(devObject.environments, function(devEnv){
      console.log('  >>>',devEnv.name,' <<<');
      _.forEach(devEnv.gulpTaskAlias, function(task){
        console.log('    gulp',task);
      });
    });
    console.log('***************************');
    console.log('*** deployment commands ***');
    console.log('***************************');
    _.forEach(deployObject.environments, function(deployEnv){
      console.log('  >>>',deployEnv.name,' <<<');
      _.forEach(deployEnv.gulpTaskAlias, function(task){
        console.log('    gulp',task);
      });
    });
    console.log('****************************');
    console.log('*** casper test commands ***');
    console.log('****************************');
    _.forEach(testObject.casper, function(casperTest){
      console.log('  >>>',casperTest.name,' <<<');
      _.forEach(casperTest.gulpTaskAlias, function(task){
        console.log('    gulp',task);
      });
    });
    console.log('***************************');
    console.log('*** karma test commands ***');
    console.log('***************************');
    _.forEach(testObject.karma, function(karmaTest){
      console.log('  >>>',karmaTest.name,' <<<');
      _.forEach(karmaTest.gulpTaskAlias, function(task){
        console.log('    gulp',task);
      });
    });
    console.log('**********************');
    console.log('*** Other Commands ***');
    console.log('**********************');
  });
  gulp.task('default', ['list']);
};
