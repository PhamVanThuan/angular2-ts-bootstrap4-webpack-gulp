import {Component, View} from 'angular2/core';

import './about.scss';

@Component({
  selector: 'app-about-page'
})
@View({
  template: require('./about.html')
})
export class AppAboutPageComponent {
  constructor() {
  }

  public html = '';

  public updateValue(val:string) {
    this.html = val;
  }
}
