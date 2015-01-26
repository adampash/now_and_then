var gulp = require('gulp');

// Run this to compress all the things!
<<<<<<< HEAD
gulp.task('production', ['karma'], function(){
  // This runs only if the karma tests pass
  gulp.start(['markup', 'images', 'iconFont', 'minifyCss', 'uglifyJs'])
});
=======
gulp.task('production', ['images', 'minifyCss', 'uglifyJs']);
>>>>>>> Initial commit of a new project
