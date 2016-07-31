import * as devObject from '../environments/development';
import * as _ from 'lodash';

module.exports = function(gulp){
  _.forEach(devObject.environments, function(devEnv){
    _.forEach(devEnv.gulpTaskAlias, function(task){
      gulp.config[task] = devEnv.globals;
      gulp.task(task, function(){
        gulp.config.globals = gulp.config[gulp.seq[0]];
        gulp.run(['internal-dev']);
      });
    });
  });
  gulp.task('internal-dev', ['internal-template:custom-typings', 'internal-scripts-dev:browser', 'internal-scripts-dev:server', 'internal-server']);
};
