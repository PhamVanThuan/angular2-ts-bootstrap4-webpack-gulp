//include all your routes in this config file
//you will need to import components the rote starts at
import { RouterConfig } from '@angular/router';
import {Home} from './components/home';
import {About} from './components/about';

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' }
]

export const expressRoutes: any = [
  '/',
  '/home',
  '/about'
]
