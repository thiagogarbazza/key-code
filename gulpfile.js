const gulp = require('gulp');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', () => {
  return gulp
    .src('dist/')
    .pipe(clean());
});

gulp.task('copy', () => {
  return gulp
    .src('src/key-code.js')
    .pipe(gulp.dest('dist/'));
});

gulp.task('uglify', () => {
  return gulp
    .src('dist/**/*.js')
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', (cb) => {
  return runSequence('clean', 'copy', 'uglify', cb);
});