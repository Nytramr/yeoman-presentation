var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');

module.exports = function (gulp) {

  // Reload all Browsers
  gulp.task('reload', function () {
    browserSync.reload();
  });

  gulp.task('serve', ['copy', 'bundle', 'cssCompile'], function() {
    browserSync.init(null, {
      //    logLevel: 'debug',
      reloadDelay: 2000, //Until version 4.x of gulp is released I need to delay reload in order to wait for other tasks to finish, Sorry.
      notify: false,
      host: '0.0.0.0',
      server: {
        baseDir: 'public',
        middleware: [ historyApiFallback ]
      }
    });
  });
};
