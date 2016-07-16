import * as devObject from '../../app/config/development';
import * as deployObject from '../../app/config/deploy';
module.exports = function(gulp){
  gulp.task('list', function() {
    console.log('****************************');
    console.log('*** development commands ***');
    console.log('****************************');
    for (var i = 0; i < devObject.environments.length; i++) {
      console.log('  >>> ' + devObject.environments[i].environment + ' environment <<<');
      for (var x = 0; x < devObject.environments[i].gulpTaskAlias.length; x++) {
        console.log('    gulp ' + devObject.environments[i].gulpTaskAlias[x]);
      }
    }
    console.log('****************************');
    console.log('*** deployment commands ***');
    console.log('****************************');
    for (var y = 0; y < deployObject.environments.length; y++) {
      console.log('  >>> ' + deployObject.environments[y].environment + ' environment <<<');
      for (var z = 0; z < deployObject.environments[y].gulpTaskAlias.length; z++) {
        console.log('    gulp ' + deployObject.environments[y].gulpTaskAlias[z]);
      }
    }
  });
  gulp.task('default', ['list']);
};
