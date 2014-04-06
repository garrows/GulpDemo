var gulp = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('scripts', function() {

    gulp.src(['./app/js/index.js'])
        .pipe(browserify({
            debug : true,
            "fullPaths": true
        }))
        .pipe(gulp.dest('./build/'))

});

gulp.task('default', [
    'scripts'
]);

