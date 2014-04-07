var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    clean = require('gulp-clean'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    compress = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html');


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

gulp.task('minifyHTML', function() {
    var opts = {comments:true,spare:true};

    gulp.src('./app/html/*.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('./build/'))
        .on('end', livereload('.html'));
});

gulp.task('scriptsLib', function () {
    return gulp.src([
        './bower_components/angular/angular.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('minifyLibsScripts', ['scriptsLib'], function () {
    return gulp.src('./build/libs.js')
        .pipe(compress())
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {

    livereloadServer = require('gulp-livereload')();

    gulp.watch(['./app/**/*.js'], ['scripts']);
    gulp.watch(['./app/**/*.html'], ['minifyHTML']);
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
    'minifyLibsScripts',
    'minifyHTML',
    'watch'
]);

