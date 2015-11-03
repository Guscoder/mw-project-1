var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function(){ //can name it anything in quotes
	return gulp.src('scss/style.scss') //grabbing this file to look at
	.pipe(sass()) //refers to variable above
	.pipe(gulp.dest('assets/css')); //copies to & creates this folder
});

gulp.task('watch', function(){
	gulp.watch(['scss/*', 'scss/**/*'], ['sass']); // **refers to all folders & files in scss folder
});