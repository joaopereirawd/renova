const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

// Tarefa para compilar SCSS
gulp.task('sass', function () {
    return gulp.src('webapp/sass/style.scss') // Caminho dos arquivos SCSS
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer()) // Adicionar prefixos de navegador automaticamente
        .pipe(gulp.dest('webapp/css')); // Pasta de saída
});

// Tarefa de observação para compilar automaticamente quando os arquivos são alterados
gulp.task('watch', function () {
    gulp.watch('webapp/sass/**/*.scss', gulp.series('sass'));
});

// Tarefa padrão para iniciar a observação
gulp.task('default', gulp.series('sass', 'watch'));
