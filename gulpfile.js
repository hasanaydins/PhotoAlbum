const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const uglify = require('gulp-minify');


function css() {
  return src('static/less/*.less')
      .pipe(less())
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


exports.css = css;
exports.minify = minify;

exports.default = parallel(css, minify);