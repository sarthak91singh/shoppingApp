var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');

gulp.task('automatic-load', function(){
/*	gulp.src('app/scripts/controllers/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('app/scripts/minified-controllers'))
		.pipe(connect.reload());*/

	gulp.src('app/')
		.pipe(connect.reload());
});


gulp.task('webserver', function() {
  gulp.src('app/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 8000,
    livereload: true
  });
});


gulp.task('watch', function(){

	gulp.watch('app/',['automatic-load']);
});


gulp.task('default',['webserver','connect','watch']);
