'use strict';
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');

gulp.task('minify-css', () => {
	return gulp.src('public/css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('build/public/css'));
});

gulp.task('uglify', () => {
	return gulp.src('public/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/public/js'));
});

gulp.task('default', ['minify-css', 'uglify']);

gulp.task('watch', () => {
	gulp.watch('public/css/*.css', ['minify-css']);
	gulp.watch('public/js/*.js',['uglify']);
});