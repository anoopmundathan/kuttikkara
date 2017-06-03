'use strict';
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');

gulp.task('minify-html', () => {
	return gulp.src('public/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('build/public'));
});

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

gulp.task('default', ['minify-html', 'minify-css', 'uglify']);

gulp.task('watch', () => {
	gulp.watch('public/css/*.css', ['minify-css']);
	gulp.watch('public/js/*.js',['uglify']);
	gulp.watch('public/index.html',['minify-html']);
});