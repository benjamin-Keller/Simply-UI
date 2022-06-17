const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

buildStyles = () => {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html', '*/*.html', '*/**/*.html']}))
        .pipe(dest('css'))
}

watchTask = () => {
    watch(['sass/**/*.scss', 'simply-ui/**/*.scss', '*.html', '*/*.html', '*/**/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)