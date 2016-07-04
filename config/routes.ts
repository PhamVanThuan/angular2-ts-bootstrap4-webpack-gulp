import { RouterConfig } from '@angular/router';
import {Home} from '../components/home';
import {About} from '../components/about';

export const routes: RouterConfig = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' }
]

export const expressRoutes = [
  '/',
  '/home',
  '/about'
]
