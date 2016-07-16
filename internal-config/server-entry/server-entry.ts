// the polyfills must be the first thing imported in node.js
import 'es6-promise';
import 'es6-shim';
// typescript emit metadata
import 'reflect-metadata';
// zone.js to track promises
import 'zone.js/dist/zone-node';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { expressEngine } from 'angular2-universal';

import {
  REQUEST_URL,
  ORIGIN_URL,
  NODE_LOCATION_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';

import { provideRouter } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// Application
import {AppComponent} from '../../app/components/app';
import { RouterConfig } from '@angular/router';
import {routes, expressRoutes} from '../../app/routes'

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..', '..', 'app', 'public'));

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

var webpack = require('webpack');
var webpackConfig = require('../webpack/browser.js');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

//const whm = require('webpack-hot-middleware');

//app.use(whm(compiler));
app.use(require("webpack-hot-middleware")(compiler));

app.use(bodyParser.json());

// Serve static files
app.use(express.static(ROOT, {index: false}));

//import { serverApi } from './backend/api';
// Our API for demos only
//app.get('/data.json', serverApi);

function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config: ExpressEngineConfig = {
    directives: [
      AppComponent
    ],
    platformProviders: [
      {provide: ORIGIN_URL, useValue: 'http://localhost:3000'},
      {provide: APP_BASE_HREF, useValue: baseUrl},
    ],
    providers: [
      {provide: REQUEST_URL, useValue: url},
      NODE_HTTP_PROVIDERS,
      provideRouter(routes),
      NODE_LOCATION_PROVIDERS
    ],
    async: true,
    preboot: false // { appRoot: 'app' } // your top level app component selector
  };

  res.render('index', config);
}

for (var eachRoute in expressRoutes) {
  if (routes.hasOwnProperty(eachRoute)) {
    app.use(expressRoutes[eachRoute], ngApp);
  }
}

// use indexFile over ngApp only when there is too much load on the server
function indexFile(req, res) {
  // when there is too much load on the server just send
  // the index.html without prerendering for client-only
  res.sendFile('/index.html', {root: __dirname});
}

// Server
app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});
