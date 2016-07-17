import * as devObject from '../environments/development';
import * as _ from 'lodash';

module.exports = function(gulp){
  _.forEach(devObject.environments, function(devEnv){
    gulp.config.globals = devEnv.globals;
    _.forEach(devEnv.gulpTaskAlias, function(task){
      console.log(task);
      gulp.task(task, ['internal-dev']);
    });
  });
  gulp.task('internal-dev', ['internal-template:custom-typings', 'internal-scripts-dev:browser', 'internal-scripts-dev:server', 'internal-server']);
};
