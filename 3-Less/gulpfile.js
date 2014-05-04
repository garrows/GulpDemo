var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    jshint = require('gulp-jshint'),
    jshintReporter = require("jshint-stylish"),
    less = require('gulp-less');




gulp.task("jshint", function() {
    return gulp.src(["./app/js/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter(jshintReporter));
});



gulp.task('browserify', function() {

    return gulp.src(['./app/js/index.js'])
        .pipe(browserify({
            debug : true,
            "fullPaths": true
        }))
        .pipe(gulp.dest('./build/'))
        .on('end', livereload('.js'));

});


gulp.task('styles', function() {
    return gulp.src(['./app/styles/index.less'])
        .pipe(less())
        .pipe(gulp.dest('./build/'))
        .on('end', livereload('.css'));
});



var livereloadServer = null;
var livereload = function (_file) {
    return function (_path) {
        if (livereloadServer) livereloadServer.changed(_file);
    }
}

gulp.task('watch', function() {
    livereloadServer = require('gulp-livereload')();

    gulp.watch(['./app/**/*.js'], ['build']);
    gulp.watch(['./app/**/*.less'], ['styles']);
});


gulp.task('build', [
    'jshint',
    'browserify'
]);


gulp.task('default', [
    'watch',
    'build',
    'styles'
]);
