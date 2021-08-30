import {CLIOptions, build} from 'aurelia-cli';
import gulp from 'gulp';
import project from '../aurelia.json';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import less from 'gulp-less';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source, {sourcemaps: true})
    .pipe(gulpIf(CLIOptions.hasFlag('watch'), plumber()))
    .pipe(less())
    .pipe(build.bundle());
}

