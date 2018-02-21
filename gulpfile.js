const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const paths = {
	src: './src/assets/',
	dist: './dist/assets/'
};

/* imageMin
==============================================*/
gulp.task('imagemin', function () {
	return gulp.src(paths.src + '**/*.{gif,png,jpg,svg}')
		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 8}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: true}
				]
			})
	]))
		.pipe(gulp.dest(paths.dist));
});

/* Build
==============================================*/
gulp.task('build', ['imagemin']);

/* Compile
==============================================*/
gulp.task('default', ['build']);