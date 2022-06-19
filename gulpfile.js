const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

buildStyles = () => {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(rename('simply.css'))
        .pipe(dest('dist/css'))

        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename('simply.min.css'))
        .pipe(dest('dist/css'))

        .pipe(sass())
        .pipe(purgecss({ content: ['*.html', '*/*.html', '*/**/*.html']}))
        .pipe(rename('simply.purged.css'))
        .pipe(dest('dist/css'));
}

watchTask = () => {
    watch(['sass/**/*.scss', 'simply-ui/**/*.scss', '*.html', '*/*.html', '*/**/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)