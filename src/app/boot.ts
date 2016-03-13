import 'angular2/bundles/angular2-polyfills';
import 'bootstrap/scss/bootstrap.scss';
import { bootstrap } from 'angular2/platform/browser';
import {
  APP_BASE_HREF,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  Location,
  LocationStrategy,
  HashLocationStrategy,
  PathLocationStrategy
} from 'angular2/router';
import {provide} from 'angular2/core';
import {AppMainComponent} from './main.component';

bootstrap(AppMainComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue : '/'}),
  provide(LocationStrategy, { useClass: PathLocationStrategy })
]);
