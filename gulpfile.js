const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('prototype:css', function() {
  return gulp.src([
    '../@whiteprint/base/index.css',
    '../@whiteprint/components/dist/components.css',
    '../@whiteprint/layouts/dist/index.css',
    '../@whiteprint/placeholders/placeholders.css'
  ])
    .pipe(concat('prototype.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('prototype:js', function() {
  return gulp.src([
    '../@whiteprint/components/dist/components.js',
    '../@whiteprint/placeholders/placeholders.js'
  ])
    .pipe(concat('prototype.js'))
    .pipe(gulp.dest('./'));
});
