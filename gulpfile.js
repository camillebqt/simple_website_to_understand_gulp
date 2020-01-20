// Load plugins
var gulp = require ('gulp');
const browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Tasks
gulp.task('hello', function(cb) {
    console.log('This is my simple website using gulp!');
    cb(); // callback fix the async completion
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['app/scss/**/*.scss'])
      .pipe(sass())
      .pipe(gulp.dest('app/styles'))
      .pipe(browserSync.stream());
});

// RUN ON THE LOCAL SERVER
gulp.task('serve', function () {
  return browserSync.init({
    server: {
      baseDir: ['app']
    },
    port: 3000,
    open: true
  });
});

// Run only 'gulp' instead of 'gulp serve'
gulp.task('default', gulp.series('hello', 'sass', 'serve'));
