/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');
<<<<<<< HEAD

gulp.task('watch', ['watchify','browserSync'], function() {
=======
var watchify = require('./browserify')

gulp.task('watch', ['watchify','browserSync'], function(callback) {
>>>>>>> Initial commit of a new project
  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.markup.src, ['markup']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
