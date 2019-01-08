var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');


var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'src'
      },
    })
  });

  gulp.task('watch:styles', function(){
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));  
    // Other watchers
  });

  gulp.task('watch', gulp.series( 'sass',
    gulp.parallel('watch:styles','browserSync')
    // Other watchers
  ));


  gulp.task('default', gulp.series('sass',
  gulp.parallel('watch')
  ));

  //gulp.task('default', gulp.parallel('watch', 'browserSync' ));
