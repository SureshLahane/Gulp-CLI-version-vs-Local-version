# Gulp-CLI-version-vs-Local-version
Gulp File for Mismatch in Gulp CLI and Local versions.

Setting up globally and in project folder.

"$" is just a symbolizes the command prompt. That's not actually part of the command you run.

install Gulp globally.

$ npm install gulp -g

*Within our project folder

Creating folder strcture.

|- src/ 

      &nbsp;&nbsp;|- css/

         &nbsp;&nbsp;&nbsp;|- style.css // we will created by gulf sass

      &nbsp;&nbsp;|- sass/

         &nbsp;&nbsp;&nbsp;|- style.scss

      &nbsp;&nbsp;|- index.html
   
|- gulpfile.js

|- package.json

The npm init command creates a package.json.

$ npm init

install Gulp into the project.

$ npm install gulp --save-dev

Preprocessing with Gulp compile Sass to CSS in Gulp.

$ npm install gulp-sass --save-dev

Live-reloading with Browser Sync.

$ npm install browser-sync --save-dev

Finally run this task with the gulp command.

$ gulp
