const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

function compileStyles() {
  return gulp
    .src("./scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./app/css/"));
}

exports.compileStyles = compileStyles;
exports.watch = function () {
  gulp.watch("./scss/**/*.scss", gulp.series("compileStyles"));
};
