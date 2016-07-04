var config = {
  gulp : require('gulp'),
  webpack : require('webpack-stream')
};

var allGulpTasks = require('require-all')(__dirname + '/gulp-tasks');
for (var task in allGulpTasks) {
  allGulpTasks[task](config);
}