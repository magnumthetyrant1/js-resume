const
  gulp  = require('gulp'),
  surge = require('gulp-surge')

gulp.task('deploy', [], () => {
  return surge({
    project: './build',
    domain: 'maxandrezils.surge.sh'
  })
})

gulp.task('default', () => {
  console.log('gulp works');
})
