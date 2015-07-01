var path = require('path');

var less = require('gulp-less');

module.exports = function (gulp) {
  gulp.task('less', function () {
    gulp.src('./www/css/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
  });
};
