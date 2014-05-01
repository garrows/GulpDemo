var gulp = require('gulp'),
    tester = require('./gulp-tester2');

gulp.task('one', function() {
    return gulp.src(['./testInput.js'])
        .pipe(tester({ name : "1.1 - Slowest", timeout: 3000 }))
});

gulp.task('two', function() {
    return gulp.src(['./testInput.js'])
        .pipe(tester({ name : "2.1 - Medium", timeout: 1000 }));
});

gulp.task('three', function() {
    return gulp.src(['./testInput.js'])
        .pipe(tester({ name : "3.1 - Speedy", timeout: 500 }));
});

gulp.task('four', ['three'], function() {
    return gulp.src(['./testInput.js'])
        .pipe(tester({ name : "4.1 - Blitzing", timeout: 1 }));
});

gulp.task('parallel', [
    'one',
    'two'
]);

gulp.task('series', [
    'four'
]);

gulp.task('default', [
    'one',
    'two',
    'three'
]);
