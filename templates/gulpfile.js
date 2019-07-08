const gulp = require('gulp');
const postcss = require('gulp-postcss');
const wpCSSconfig = require('whiteprint/cssconfig.js');

// Whiteprint CSS task
gulp.task('whiteprint:build', function (done) {
  return gulp.src('./src/css/styles.css')
    .pipe(postcss(wpCSSconfig))
    .pipe(gulp.dest('./css'));
    done();
});

// Whiteprint watch task
gulp.task('whiteprint:watch', function() {
  return gulp.watch(['./src/css/variables.css', './src/css/**/*.css', './src/css/styles.css'],
  gulp.series('whiteprint:build'));
});
