const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

buildStyles = () => {
    return src('simply-ui/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

watchTask = () => {
    watch(['simply-ui/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)