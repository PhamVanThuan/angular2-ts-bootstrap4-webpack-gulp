import * as deployObject from '../environments/deploy';
import * as _ from 'lodash';

module.exports = function(gulp){
  _.forEach(deployObject.environments, function(deployEnv){
    _.forEach(deployEnv.gulpTaskAlias, function(task){
      gulp.config[task] = deployEnv.globals;
      gulp.task(task, function(){
        gulp.config.globals = gulp.config[gulp.seq[0]];
        gulp.run(['internal-deploy']);
      });
    });
  });
  gulp.task('internal-deploy', ['internal-template:custom-typings', 'internal-scripts-deploy:browser', 'internal-scripts-deploy:server']);
};
