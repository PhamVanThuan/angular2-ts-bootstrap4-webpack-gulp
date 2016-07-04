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
import {AppComponent} from '../../components/app';

import { RouterConfig } from '@angular/router';
import {Home} from '../../components/home';
import {About} from '../../components/about';

const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' }
]

// enable prod for faster renders
enableProdMode();

// you must return bootstrap for client.ts
function ngApp() {
  return bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    provideRouter(routes)
  ]);
}


// on document ready bootstrap Angular 2
document.addEventListener('DOMContentLoaded', () => {

  ngApp()
    .then(prebootComplete);

});
