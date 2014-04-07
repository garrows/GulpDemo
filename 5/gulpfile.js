var gulp = require('gulp'),
    tester = require('./gulp-tester');

gulp.task('one', function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "1.1", timeout: 3000 }))

    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "1.2", timeout: 10 }))
});

gulp.task('two', function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "2.1", timeout: 1000 }));
});

gulp.task('three', function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "3.1", timeout: 10 }));
});

gulp.task('four', ['three'], function() {
    gulp.src(['./testInput.js'])
        .pipe(tester({ name : "4.1", timeout: 1000 }));
});

gulp.task('default', [
    'one',
    'two',
    'four'
]);

