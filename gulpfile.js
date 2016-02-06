'use strict';

var
  fs         = require('fs'),
  gulp       = require('gulp'),
  sass       = require('gulp-ruby-sass'),
  prefix     = require('gulp-autoprefixer'),
  slim       = require("gulp-slim"), 
  connect    = require('gulp-connect'),
  browserify = require("browserify"),
  babelify   = require("babelify")
;

gulp.task('scss2css', function() {
  gulp.src('./source/scss/main.scss', {base: './'})
    .pipe(sass({sourcemap: false}))
    .on('error', function (err) { console.log(err.message);})
    .pipe(gulp.dest('./'));
});

gulp.task('autoprefixer', function() {
  gulp.src('./source/scss/main.css')
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('babelify', function() {
  browserify('./source/js/main.js', { debug: false, sourceType: 'module' })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("./dist/js/main.js"));
});

gulp.task('traceur', function () {
    return gulp.src('./source/js/main.js')
        .pipe(traceur({modules: "inline"}))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('slim2html', function(){
  gulp.src("./source/slim/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("./dist/"));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', function() {
  gulp.watch('./source/scss/*.scss', ['scss2css', 'autoprefixer']);
  gulp.watch('./source/js/*.js', ['babelify']);
  gulp.watch('./source/slim/*.slim', ['slim2html']);
});

gulp.task('default', ['connect', 'watch']);
