var clean = require('gulp-clean');

module.exports = function (gulp) {
  gulp.task('copy', ['copyhtml', 'copycss']);

  gulp.task('copyhtml', ['clean'], function(){
    return gulp.src('./www/**/*.html', {base: './www'})
    .pipe(gulp.dest('./public'));
  });

  gulp.task('copycss', ['clean'], function(){
    return gulp.src('./www/css/**/*.css', {base: './www/css'})
    .pipe(gulp.dest('./public/css'));
  });

  //CLEAN server
  gulp.task('clean', function() {
    return gulp.src('./public')
    .pipe(clean());
  });
};
