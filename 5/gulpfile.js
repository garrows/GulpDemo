var gulp = require('gulp'),
    tester = require('./gulp-tester');

gulp.task('one', function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "1.1 - Slowest", timeout: 3000 }))

    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "1.2 - Fast", timeout: 10 }))
});

gulp.task('two', function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "2.1 - Medium", timeout: 1000 }));
});

gulp.task('three', function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "3.1 - Speedy", timeout: 500 }));
});

gulp.task('four', ['three'], function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "4.1 - Blitzing", timeout: 1 }));
});

gulp.task('parallel', [
    'one',
    'two'
]);

/*
    Started: tester 1.1 - Slowest
    Started: tester 1.2 - Fast
    Started: tester 2.1 - Medium
    Done: tester 1.2 - Fast
    Done: tester 2.1 - Medium
    Done: tester 1.1 - Slowest
*/

gulp.task('series', [
    'four'
]);

/*
    Started: tester 3.1 - Speedy
    Started: tester 4.1 - Blitzing
    Done: tester 4.1 - Blitzing
    Done: tester 3.1 - Speedy
*/