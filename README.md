# Gulp-CLI-version-vs-Local-version
Gulp File for Mismatch in Gulp CLI and Local versions 

Setting up globally and in project folder

install Gulp globally
$ npm install gulp -g

*Within our project folder

Creating folder strcture

|- src/ 

   |- css/
   
      |- style.css // we will created by gulf sass
      
   |- sass/
   
      |- style.scss
      
   |- index.html
   
|- gulpfile.js

|- package.json

The npm init command creates a package.json
$ npm init

install Gulp into the project
$ npm install gulp --save-dev

Preprocessing with Gulp compile Sass to CSS in Gulp
$ npm install gulp-sass --save-dev

Live-reloading with Browser Sync
$ npm install browser-sync --save-dev
