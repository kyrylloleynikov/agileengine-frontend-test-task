'use strict';

const gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    gulpLess = require('gulp-less'),
    gulpOpen = require('gulp-open'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourceMaps = require('gulp-sourcemaps');

gulp.task('default', ['compileJS', 'sass', 'sass:watch', 'less', 'less:watch', 'open']);

gulp.task('sass', function() {
    gulp.src('./css/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('less', function() {
    gulp.src('./css/*.less')
        .pipe(gulpLess({
            'paths': ['./css']
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('less:watch', function() {
    gulp.watch('./css/*.less', ['less']);
});

gulp.task('open', function() {
    gulp.src('./index.html').pipe(gulpOpen());
});

gulp.task('compileJS', function() {
    let bundler = watchify(browserify('./app.js', { debug: true }).transform(babelify));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourceMaps.init({ loadMaps: true }))
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest('./js'));
    }

    bundler.on('update', function() {
        console.log('-> bundling...');
        rebundle();
    });

    rebundle();
});
