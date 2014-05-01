var gulp = require('gulp'),
    browserify = require('gulp-browserify');

var livereloadServer;
var livereload = function (_file) {
    return function (_path) {
        if (livereloadServer) livereloadServer.changed(_file);
    }
}

gulp.task('scripts', function() {

    return gulp.src(['./app/js/index.js'])
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

gulp.task('default', [
    'scripts',
    'watch'
]);
