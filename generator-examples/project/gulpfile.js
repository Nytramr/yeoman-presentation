//General
var gulp = require("gulp");
var path = require("path");

// WEBPACK
require('./tasks/webpack-task')(gulp);

//LESS
require('./tasks/less-task')(gulp);

gulp.task('cssCompile', ['less']); //List of css copilers to run

//Copy static files
require('./tasks/copy-static-files-task')(gulp);

//Live-connect
require('./tasks/dev-server-task')(gulp);

//Karma
require('./tasks/karma-task')(gulp);

//Watch
gulp.task('watch', ['bundle', 'cssCompile' ,'serve'], function() {
  gulp.watch(['./app/**/*.jsx','./app/**/*.js'], ['bundle' ,'reload']);
  gulp.watch(['./www/css/**/*.*'], ['cssCompile' ,'reload']);
});

gulp.task('dev', ['clean', 'copy', 'bundle', 'cssCompile'
 , 'serve' 
 , 'watch'
]);

gulp.task('test:unit', ['clean', 'copy', 'bundle', 'cssCompile', 'test']);

<!--
gulp.task('test:e2e', ['clean', 'copy', 'bundle', 'cssCompile'
 , 'serve' 
 , 'watch'
]);
-->
