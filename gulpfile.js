const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const Paths = {
    src: './src/**/*.ttf',
    dist: './dist'
}

gulp.task('woff', function() {
    return gulp.src(Paths.src)
        .pipe(ttf2woff())
        .pipe(gulp.dest(Paths.dist));
})

gulp.task('woff2', function () {
    return gulp.src(Paths.src)
        .pipe(ttf2woff2())
        .pipe(gulp.dest(Paths.dist));
})

gulp.task('default', gulp.series('woff', 'woff2'));