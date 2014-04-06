var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    clean = require('gulp-clean')
    bower = require('gulp-bower')

var livereloadServer; 
var livereload = function (_file) {
    return function (_path) {
        if (livereloadServer) livereloadServer.changed(_file);
    }
}

gulp.task('scripts', function() {

    gulp.src(['./app/js/index.js'])
        .pipe(browserify({
            debug : true,
            "fullPaths": true
        }))
        .pipe(gulp.dest('./build/'))
        .on('end', livereload('.js'));

});

gulp.task('watch', function() {

    livereloadServer = require('gulp-livereload')();

    gulp.watch(['./app/**/*.js'], ['scripts']);
});

gulp.task('clean', function() {
    gulp.src(['./build', './bower_components'], {read: false})
        .pipe(clean());
});

gulp.task('bower', function() {
    bower()
        .pipe(gulp.dest('./bower_components/'))
});

gulp.task('default', [
    'bower',
    'scripts',
    'watch'
]);

