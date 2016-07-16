const gulp = require('gulp');

var allGulpTasks = require('require-all')(__dirname + '/internal-config/gulp-tasks');
for (var task in allGulpTasks) {
  allGulpTasks[task](gulp);
}
