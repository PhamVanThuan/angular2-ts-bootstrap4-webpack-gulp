import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'nav',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: require('./nav.html')
})
export class Nav { }
