import * as deployObject from '../environments/deploy';
import * as _ from 'lodash';

module.exports = function(gulp){
  _.forEach(deployObject.environments, function(deployEnv){
    gulp.config.globals = deployEnv.globals;
    _.forEach(deployEnv.gulpTaskAlias, function(task){
      gulp.task(task, ['internal-deploy']);
    });
  });
  gulp.task('internal-deploy', ['internal-template:custom-typings', 'internal-scripts-deploy:browser', 'internal-scripts-deploy:server']);
};
