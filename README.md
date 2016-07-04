##Angular 2.0b.9 Bootstrap 4a.2 Gulp Webpack Typescript Ui-Bootstrap

###Installation

Requirements:

- NodeJS
- Knowledge of gulp
- Knowledge of webpack
- Knowledge of angular2
- Knowledge of Bootstrap
- Knowledge of Sass

Installation:

```bash
npm install -g gulp typescript typings webpack
npm install
typings install
```

To run:

```bash
'gulp' or 'gulp list' to list available gulp tasks
```

###Usage

This starter kit should help you get started in learning angular 2 and bootstrap 4.

* Gulp tasks are seperated in the ./gulp-tasks folder
* typings are install to /typi

    Justelite
    Bookmark
    (STEAM)Retention ngs folder
* everything in the src folder gets compiled down to a file called bundle.js in the ./build directory
* for distribution you only need the index.js and bundle.js in the ./build folder
* the entry point for webpack is at ./src/app/boot.ts and the index entry is located at ./index.html


###Current Version bootstrap and angular 2 installed

Angular 2.0 Beta 9

Bootstrap 4.0 Alpha 2

###Tips for working with angular2 and typescript

1) If you have tsd installed, remove it.

```bash
  npm uninstall tsd -g
```

2) You should only use typings as it successor to tsd much like npm is the successor to bower.  As far as I can tell, the reason behind this is because when you install typings it seems you get a browser version and a node version of typings.

```bash
  npm install typings -g
```

3) If you are using atom(if not you should be), use the (https://atom.io/packages/language-typescript-grammars-only)[Grammer Only] plugin as the other typescript plugins have some very weird uninteded issues such as auto compiling typescript or saying you haven't included tsd files when its not necessary.

4) Don't use browserify with angular2, just don't.  Its a nightmare and hard to get things into 1 file.  Take it from experience.  Learn how to use webpack, you will like it better in the end.

5) Don't use angular2 without typescript.  Everyone is using it that way and all the examples are that using it with typescript.  You will have a hard time finding help with es5 angular2.
