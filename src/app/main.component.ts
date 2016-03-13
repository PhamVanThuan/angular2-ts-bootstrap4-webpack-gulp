import { Component, View } from 'angular2/core';
import {Router,RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';

import { MyService } from './services/sampleService';

import { AppHomeComponent } from './pages/home/home.component';

import './main.scss';

@RouteConfig([
  { path: '/', component: AppHomeComponent, as: 'Home', useAsDefault: true}
])

@Component({
  selector: 'app',
  bindings: [MyService]
})
@View({
  template: require('./main.html'),
  directives: [...ROUTER_DIRECTIVES]
})
export class AppMainComponent {
  appStatus: string;
  serviceStatus: string;

  constructor(myService: MyService) {
    this.serviceStatus = myService.getMessage();
    this.appStatus = 'Application is working.';
  }
}
