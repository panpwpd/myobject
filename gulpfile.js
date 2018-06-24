//创建gulp
const gulp = require("gulp");
//copy  压缩  图片
const imagemin = require("gulp-imagemin")
//  复制 压缩scss
const sass=require("gulp-sass"); 
var cleanCss = require("gulp-clean-css");
//合并文件  插件
var concat = require("gulp-concat");
//压缩文件
var uglify = require("gulp-uglify");
//重命名的插件
var rename = require("gulp-rename");
//本地链接
var connect= require("gulp-connect");
//将es6转化为es5
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps")
//检测是否链接
/*gulp.task("hello",function(){
	console.log("hello world");
})*/

//copy zhuye html文件
gulp.task("copy-zhuye",function(){
	 gulp.src("zhuye.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
//copy  压缩图片    之前先在小黑块中创建   
//cnpm install gulp-imagemin --save-dev
gulp.task("copy-img",function(){
	gulp.src("img/**")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload())
})
//将scss转化为css
//压缩css    cnpm install gulp-clean-css --save-dev
gulp.task("sass",function(){
	gulp.src("stylesheet/**.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(cleanCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
})
//将js文件copy到dist下面
//合并两个js文件
gulp.task("script",function(){
	gulp.src(["js/js1.js","js/js2.js"])
	.pipe(concat("hebing.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})

gulp.task("copy-js",function(){
	gulp.src("js/**")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
//将合并文件进行压缩  并保留原来合并的
gulp.task("script",function(){
	gulp.src(["js/js1.js","js/js2.js"])
	.pipe(concat("hebing.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("yasuo.js"))
	.pipe(gulp.dest("dist/js"))
	
})
//监听html文件
gulp.task("copy-html",function(){
	gulp.src("html/**")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})
//时时监听文件
gulp.task("watch",function(){
	gulp.watch("zhuye.html",["copy-zhuye"]);
	gulp.watch("img/**",["images"]);
	gulp.watch("stylesheet/*",["sass"])
	gulp.watch("js/**",["copy-js"])
	gulp.watch("html/**",["copy-html"])
	
})
//gulp-connect插件搭载本地服务
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
	})
})
//穿件一个默认任务
gulp.task("default1",["server","watch"]);

//将es6转化为es5
gulp.task("default",function(){
	gulp.src("js/js3.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(rename("es5.js"))
	.pipe(gulp.dest("dist/js"))
})
