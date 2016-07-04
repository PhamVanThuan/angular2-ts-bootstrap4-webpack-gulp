import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';
import {ViewEncapsulation} from '@angular/core';

//console.error(require('bootstrap/scss/bootstrap.scss'));
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('bootstrap/scss/bootstrap.scss') 
  ],
  template: `
  <h3 id="universal">Angular2 Universal</h3>
  <nav>
    <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./home'] ">Home</a>
    <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./about'] ">About</a>
  </nav>
  <div class="hero-universal">
    <div class="inner-hero">
      <div>
        <h3>Universal JavaScript {{ title }}!</h3>
      </div>

      Two-way binding: <input type="text" [value]="title" (input)="title = $event.target.value" autofocus>
      <br><br>

      <strong>Async data call return value:</strong>
      <pre>{{ data | json }}</pre>

      <strong>Router-outlet:</strong>
      <main>
        <router-outlet></router-outlet>
      </main>

      <blockquote>{{ server }}</blockquote>
    </div>
  </div>
  `
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
