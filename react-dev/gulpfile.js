var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var Server = require('karma').Server;
var protractor = require("gulp-protractor").protractor;
//var jshint = require('gulp-jshint');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("protractor",function () {
  return gulp.src([])
      .pipe(protractor({
          configFile: "./test/conf.js",
      }))
});