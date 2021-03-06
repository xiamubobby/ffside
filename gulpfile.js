/**
 * Created by natsuki on 16/4/15.
 */
var gulp = require("gulp")
var glob = require("glob")
var ts = require("gulp-typescript")
var rename = require("gulp-rename")

gulp.task("default", ["ts-addon", "ts-content"])

gulp.task("ts-addon", function() {
    return gulp.src('./data/**/**/*.ts', {base:"./"})
        .pipe(ts({
            module:"commonjs",
            target:"es5",
            noImplicitAny: true,
            emitError: true
        })).js
        .pipe(rename(function (path) {
            path.basename += "-addon"
        })).
        pipe(gulp.dest("./"))
});
gulp.task("ts-content", function () {
    return gulp.src("./data/**/**/*.ts", {base:"./"})
        .pipe(ts({
            module:"amd",
            target:"es5",
            noImplicitAny: true,
            emitError: false
        })).js
        .pipe(rename(function (path) {
            path.basename += "-content"
        })).
        pipe(gulp.dest("./"))
})