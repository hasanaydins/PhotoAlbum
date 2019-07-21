const { src, dest,series,watch } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const uglify = require('gulp-minify');

function css() {
    return src('static/less/*.less')
        .pipe(less())
<<<<<<< HEAD
=======
        .pipe(dest('static/css'))
>>>>>>> b9192541951a28571bc154dc400401a01791ad7d
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