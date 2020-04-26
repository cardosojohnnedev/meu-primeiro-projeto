'usestrict';

var gulp = require('gulp');
var sass = require('gulp-sass');

//Task para o sass
gulp.task('sass', function(){
    return gulp.src('sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('erro', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', gulp.series('sass', function (){ 
    gulp.watch('sass/**/*.sass', gulp.series('sass')); 
   }));

gulp.task('default', gulp.series('sass', 'watch'));

//gulp.task('sass:watch', function(){
  //  gulp.watch('sass/**/*.sass',['sass']);
//});

//task default gulp
//gulp.task('default', ['sass','watch']);