module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=\"home\">\n  This is the \"Home\" page\n</div>\n";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "exports = module.exports = require(\"./../../node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.id, \".home {\\n  background-color: red;\\n}\\n\", \"\"]);\n\n// exports\n"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var About = (function () {
	    function About() {
	    }
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: "\n    <div>This is the \"About\" page</div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], About);
	    return About;
	}());
	exports.About = About;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(6));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(14);
	var core_2 = __webpack_require__(1);
	var AppComponent = (function () {
	    function AppComponent(http) {
	        this.http = http;
	        this.title = 'ftw';
	        this.data = { message: 'before the render' };
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        setTimeout(function () {
	            _this.server = 'This was rendered from the server!';
	        }, 10);
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: router_1.ROUTER_DIRECTIVES.slice(),
	            encapsulation: core_2.ViewEncapsulation.None,
	            styles: [
	                __webpack_require__(17)
	            ],
	            template: "\n  <h3 id=\"universal\">Angular2 Universal</h3>\n  <nav>\n    <a [routerLinkActive]=\"['active', 'router-link-active']\" [routerLink]=\" ['./home'] \">Home</a>\n    <a [routerLinkActive]=\"['active', 'router-link-active']\" [routerLink]=\" ['./about'] \">About</a>\n  </nav>\n  <div class=\"hero-universal\">\n    <div class=\"inner-hero\">\n      <div>\n        <h3>Universal JavaScript {{ title }}!</h3>\n      </div>\n\n      Two-way binding: <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" autofocus>\n      <br><br>\n\n      <strong>Async data call return value:</strong>\n      <pre>{{ data | json }}</pre>\n\n      <strong>Router-outlet:</strong>\n      <main>\n        <router-outlet></router-outlet>\n      </main>\n\n      <blockquote>{{ server }}</blockquote>\n    </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(8));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__filename) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Home = (function () {
	    function Home() {
	    }
	    Home = __decorate([
	        core_1.Component({
	            moduleId: __filename,
	            selector: 'home',
	            styles: [
	                __webpack_require__(5)
	            ],
	            template: __webpack_require__(4)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;

	/* WEBPACK VAR INJECTION */}.call(exports, "components/home/home.component.ts"))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(10));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	__webpack_require__(15);
	var path = __webpack_require__(19);
	var express = __webpack_require__(18);
	var bodyParser = __webpack_require__(16);
	var core_1 = __webpack_require__(1);
	var angular2_universal_1 = __webpack_require__(3);
	var angular2_universal_2 = __webpack_require__(3);
	var router_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(13);
	var app_1 = __webpack_require__(9);
	var home_1 = __webpack_require__(11);
	var about_1 = __webpack_require__(7);
	var routes = [
	    { path: '', component: home_1.Home },
	    { path: 'home', component: home_1.Home },
	    { path: 'about', component: about_1.About },
	    { path: '**', redirectTo: 'home' }
	];
	core_1.enableProdMode();
	var app = express();
	var ROOT = path.join(path.resolve(__dirname, '..', '..'));
	app.engine('.html', angular2_universal_1.expressEngine);
	app.set('views', __dirname);
	app.set('view engine', 'html');
	app.use(bodyParser.json());
	app.use(express.static(ROOT, { index: false }));
	function ngApp(req, res) {
	    var baseUrl = '/';
	    var url = req.originalUrl || '/';
	    var config = {
	        directives: [
	            app_1.AppComponent
	        ],
	        platformProviders: [
	            { provide: angular2_universal_2.ORIGIN_URL, useValue: 'http://localhost:3000' },
	            { provide: common_1.APP_BASE_HREF, useValue: baseUrl },
	        ],
	        providers: [
	            { provide: angular2_universal_2.REQUEST_URL, useValue: url },
	            angular2_universal_2.NODE_HTTP_PROVIDERS,
	            router_1.provideRouter(routes),
	            angular2_universal_2.NODE_LOCATION_PROVIDERS
	        ],
	        async: true,
	        preboot: false
	    };
	    res.render('index', config);
	}
	app.use('/', ngApp);
	app.use('/about', ngApp);
	app.use('/home', ngApp);
	function indexFile(req, res) {
	    res.sendFile('/index.html', { root: __dirname });
	}
	app.listen(3000, function () {
	    console.log('Listening on: http://localhost:3000');
	});

	/* WEBPACK VAR INJECTION */}.call(exports, "config/server"))

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("@angular/common");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal/polyfills");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("bootstrap/scss/bootstrap.scss");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);