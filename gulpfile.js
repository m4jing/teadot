var gulp = require('gulp');
var del = require('del');
var watchify = require('watchify');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var shim = require('browserify-shim');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minicss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

// gulp server
gulp.task('server:example', function() {
  connect.server({
    root: 'example',
    port: 3001,
    livereload: true
  });
});

gulp.task('lint', function() {
  return gulp.src(['source/jsx/**/*js','example/index.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('clean', function() {
    del('dist/*');
});

// gulp tasks example
gulp.task('clean:example:js', function() {
    del(['example/dist/*.js','example/dist/*.js.map']);
});

gulp.task('clean:example:css', function() {
    del(['example/dist/*.css','example/dist/*.css.map']);
});

gulp.task('build:example:js',['clean:example:js'], function() {
    var bundler = watchify(browserify('example/index.js', watchify.args));

    bundler.transform(babelify, {
        presets: ['es2015',"stage-0", 'react']
    }).transform(shim);
    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .on('error', handleErrors)
            .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
            .pipe(source('teadot-v0.0.1.min.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./example/dist/'))
            .pipe(connect.reload());
    }

    return rebundle();

});

gulp.task('build:example:css', ['clean:example:css'], function () {
    gulp.src('example/index.less')
    	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minicss())
        .pipe(rename("teadot-v0.0.1.min.css"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./example/dist/'))
        .pipe(connect.reload());
});

gulp.task('build:example:html', function () {
  gulp.src('example/**/*.html')
    .pipe(connect.reload());
});

// gulp tasks source
gulp.task('build:js',['clean'], function() {
    browserify('source/jsx/index.js')
        .transform(babelify, {
            presets: ['es2015',"stage-0", 'react']
        })
        .transform(shim)
        .bundle()
        .on('error', handleErrors)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(source('teadot-v0.0.1.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build:css', ['clean'], function () {
    gulp.src('source/less/index.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minicss())
        .pipe(rename("teadot-v0.0.1.min.css"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

// gulp tasks
gulp.task('watch', function() {
    gulp.watch(['example/**/*.js','!example/dist/*','source/**/*.js'], ['build:example:js','lint']);
    gulp.watch(['example/**/*.less','source/**/*.less'], ['build:example:css']);
    gulp.watch(['example/**/*.html'], ['build:example:html']);
})

gulp.task('default', ['lint','build:example:css','build:example:js','build:example:html','server:example','watch']);
gulp.task('deploy', ['lint','build:css','build:js']);

// handle function
function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}
