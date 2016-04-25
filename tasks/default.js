import gulp from 'gulp'
import requireDir from 'require-dir'
import bs from 'browser-sync'

const browserSync = bs.create()

requireDir('.', { recurse: false })

// use default task to launch Browsersync and watch JS files
gulp.task('serve', () => {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/index.html',['inline'])
    .on('change', (e) => {  // Arrow functions!!
      console.log(`File ${e.path} was ${e.type}...`) // Template strings and interpolation!!
    })
    gulp.watch('**/*.js',['lint'])
     .on('change', (e) => {  // Arrow functions!!
       console.log(`File ${e.path} was ${e.type}...`) // Template strings and interpolation!!
     })
     gulp.watch('./dist/index.html',browserSync.reload)

})

gulp.task('default', () => { // Arrow functions!!


})
