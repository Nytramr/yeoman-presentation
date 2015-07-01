var karma = require('karma').server;
var path = require('path');

module.exports = function (gulp) {
  gulp.task('test', function (done) {
    karma.start({
      configFile: __dirname + '../karma.conf.js',
      singleRun: false
    }, done);
  });
};
