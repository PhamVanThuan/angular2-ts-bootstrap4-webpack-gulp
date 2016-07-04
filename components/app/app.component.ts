import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';
import {ViewEncapsulation} from '@angular/core';
import {Nav} from '../nav';

@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    Nav
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('../../node_modules/bootstrap/scss/bootstrap.scss'),
    require('./app.css')
  ],
  template: require('./app.html')
})
export class AppComponent {
  title: string = 'ftw';
  data = {message: 'before the render'};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    // limit the use of setTimeouts
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    // use services for http calls
    // this.http.get('/data.json')
    //   .subscribe(res => {
    //     this.data = res.json();
    //   });
  }

}
