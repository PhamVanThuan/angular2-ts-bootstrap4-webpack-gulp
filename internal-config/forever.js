
/* jshint ignore:start */
// Code here will be linted with ignored by JSHint.

var express = require('express');

var app = express();

//var favicon = require('serve-favicon');

// app.use(function(req, res, next) {
//     var reqType = req.headers["x-forwarded-proto"];
//     reqType == 'https' ? next() : res.redirect("https://" + req.headers.host + req.url);
// });

app.use(express.static(__dirname + '/build'));

//app.use(favicon('./favicon.ico'));

app.listen(process.env.PORT || 80);
/* jshint ignore:end */
//"webpack-hot-middleware": "git+https://github.com/thomasmeadows/webpack-hot-middleware.git",
//"zone.js": "https://github.com/angular/zone.js.git#master"
