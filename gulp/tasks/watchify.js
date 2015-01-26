var gulp           = require('gulp');
<<<<<<< HEAD
var browserifyTask = require('./browserify');

gulp.task('watchify', function() {
  // Start browserify task with devMode === true
  return browserifyTask(true);
=======
var browserifyTask = require('./browserify')

gulp.task('watchify', function(callback) {
  // Start browserify task with devMode === true
  browserifyTask(callback, true);
>>>>>>> Initial commit of a new project
});
