const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

buildStyles = () => {
    return src('simply-ui/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html']}))
        .pipe(dest('css'))
}

watchTask = () => {
    watch(['simply-ui/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)