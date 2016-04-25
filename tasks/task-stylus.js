import gulp from 'gulp'
import stylus from 'gulp-stylus'
import sourcemaps from 'gulp-sourcemaps'
import inject from 'gulp-inject'
import inline from 'gulp-inline'


gulp.task('style', ['clean'], () => {
  return gulp.src('./src/css/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('inject', ['style'], () => {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./build/css/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./build'));
});

gulp.task('inline', ['inject'], () => {
  return gulp.src('./build/index.html')
  .pipe(inline({
    base: './',
    disabledTypes: ['svg', 'img', 'js'], // Only inline css files
    ignore: ['./css/do-not-inline-me.css']
  }))
  .pipe(gulp.dest('./dist'));
});

// Set linenos
gulp.task('linenos', function () {
  return gulp.src('./css/main.styl')
    .pipe(stylus({linenos: true}))
    .pipe(gulp.dest('./css/build'));
});


// Inline sourcemaps
gulp.task('sourcemaps-inline', function () {
 return gulp.src('./css/main.styl')
   .pipe(sourcemaps.init())
   .pipe(stylus())
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./css/build'));
});

// External sourcemaps
gulp.task('sourcemaps-external', function () {
 return gulp.src('./css/main.styl')
   .pipe(sourcemaps.init())
   .pipe(stylus())
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('./css/build'));
});
