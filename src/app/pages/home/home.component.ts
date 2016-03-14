import {Component, View} from 'angular2/core';

//import { MyService } from ',/services/sampleService';
import './home.scss';

@Component({
  selector: 'app-home-page'
})
@View({
  template: require('./home.html')
})
export class AppHomePageComponent {
  constructor() {
  }

  public html = '';

  public updateValue(val:string) {
    this.html = val;
  }
}
