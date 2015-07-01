// WEBPACK
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (gulp) {
  gulp.task('bundle', function () {
    var stream = gulp.src('./app/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('public/js/'));
    return stream;
  });
};
