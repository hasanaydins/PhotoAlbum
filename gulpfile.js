const { src, dest,series,watch } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const uglify = require('gulp-minify');

function css() {
    return src('static/less/*.less')
        .pipe(less())
        .pipe(dest('static/css'))
        .pipe(minifyCSS())
        .pipe(dest('dist/css'))
}
function minify() {
    return src('static/js/*.js', { sourcemaps: true })
    // Minify the file
        .pipe(uglify())
        // Output
        .pipe(dest('dist/js', { sourcemaps: true }))
}
function watcher(done) {
    // css changes
    watch('static/**/*.less', css);
    // js changes
    watch('static/**/*.js', minify);
    done();
}

exports.watcher = watcher;
exports.css = css;
exports.minify = minify;

exports.default = series(exports.watcher, exports.css, exports.minify);