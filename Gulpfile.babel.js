//declare gulp
const gulp = require('gulp');

//set empty config object to store variables
gulp.config = {};

//gather all task with require-all
var allGulpTasks = require('require-all')(__dirname + '/config/gulp-tasks');
for (var task in allGulpTasks) {
  //run each task passing in gulp
  allGulpTasks[task](gulp);
}
