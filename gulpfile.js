const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('styles/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('styles/css'))
});
