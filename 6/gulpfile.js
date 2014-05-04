var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	jshint = require('gulp-jshint'),
	jshintReporter = require("jshint-stylish"),
	less = require('gulp-less'),
	minifyCss = require('gulp-minify-css'),
	minifyHtml = require('gulp-minify-html'),
	rename = require('gulp-rename'),
	shell = require('gulp-shell'),
	uglify = require('gulp-uglify');

gulp.task('appScripts', ['jshint'], function() {
	return gulp.src(['./src/scripts/index.js'])
		.pipe(browserify())
		.pipe(rename('app.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('appScriptsMinify', ['appScripts'], function() {
	return gulp.src(['./dist/app.js'])
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('appStyles', function() {
	return gulp.src(['./src/styles/index.less'])
		.pipe(less())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('appStylesMinify', ['appStyles'], function() {
	return gulp.src(['./dist/app.css'])
		.pipe(minifyCss())
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('htmlMinify', function() {
	return gulp.src(['./src/markup/*.html'])
		.pipe(minifyHtml())
		.pipe(gulp.dest('./dist'));
});

gulp.task("jshint", function() {
	return gulp.src(["./src/scripts/**/*.js", "test/**/*.js"])
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

gulp.task('test', function() {
	return gulp.src('').pipe(shell([
		'npm test'
	]));
});

gulp.task('watch', function() {
	gulp.watch(['./src/scripts/**/*'], ['scripts', 'test']);
	gulp.watch(['./src/styles/**/*'], ['styles']);
	gulp.watch(['./src/markup/**/*'], ['markup']);
	gulp.watch(['./test/**/*'], ['test']);
});

gulp.task('default', ['scripts', 'styles', 'markup', 'test']);
gulp.task('scripts', ['appScripts', 'appScriptsMinify']);
gulp.task('styles', ['appStyles', 'appStylesMinify']);
gulp.task('markup', ['htmlMinify']);
gulp.task('run', ['default', 'watch']);