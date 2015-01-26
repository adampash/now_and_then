var gulp = require('gulp');
<<<<<<< HEAD
var config = require('../config').markup;
=======
var config = require('../config').markup
>>>>>>> Initial commit of a new project
var browserSync  = require('browser-sync');

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
