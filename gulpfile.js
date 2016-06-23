var gulp = require('gulp');
var elm  = require('gulp-elm');

gulp.task('default', ['elm:watch']);

gulp.task('elm:watch', function () {
  gulp.watch('./**/*.elm', ['elm']);
});

gulp.task('elm-init', elm.init);

gulp.task('elm', ['elm-init'], function(){
  return gulp.src('./*.elm')
    .pipe(elm.make({
      filetype: 'html'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('elm-bundle', ['elm-init'], function(){
  return gulp.src('src/*.elm')
    .pipe(elm.bundle('bundle.js'))
    .pipe(gulp.dest('dist/'));
});
