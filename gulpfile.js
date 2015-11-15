var gulp = require('gulp');
var kindlegen = require('./kindlegen');

gulp.task('kindle', function(){
    gulp.src('./books/src/md/**/*.md')
        .pipe( kindlegen() )
        // .dist('./books/converted/');
});