// the polyfills must be the first thing imported
import 'angular2-universal/polyfills';

// Angular 2
import {enableProdMode} from '@angular/core';
// Angular 2 Universal
import {prebootComplete} from 'angular2-universal';


// Angular 2 Universal
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

// Application
import {AppComponent} from '../../app/components/app';

import {routes} from '../../app/routes'


// you must return bootstrap for client.ts
function ngApp() {
  return bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    provideRouter(routes)
  ]);
}

if (DEBUG) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(ngApp, module); // pass the main function
  //prebootComplete;
} else {
  // enable prod for faster renders
  enableProdMode();
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => {

    ngApp()
    .then(prebootComplete);

  });
}
