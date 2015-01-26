var gulp = require('gulp');
<<<<<<< HEAD
var karma = require('karma');

var karmaTask = function(done) {
  karma.server.start({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }, done);
};

gulp.task('karma', karmaTask);

module.exports = karmaTask;
=======
var config       = require('../config').karma;
var karma = require('karma').server;

console.log(config.conf);

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    // configFile: __dirname + '/karma.conf.js',
    configFile: config.conf
    // singleRun: true
  }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: config.conf
  }, done);
});
>>>>>>> Initial commit of a new project
