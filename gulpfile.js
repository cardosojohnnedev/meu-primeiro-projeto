'usestrict';

var gulp = require('gulp');
var sass = require('gulp-sass');


//Task para o sass
gulp.task('sass', function(){
    return gulp.src('sass/*.sass')
    .pipe(sass().on('erro', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function(){
    gulp.watch('sass/*.sass',['sass']);
});

//task default gulp
gulp.task('default', function(){
    
});