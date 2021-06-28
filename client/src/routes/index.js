import { HomePage } from '../containers/Home';
import { Dashboard } from '../containers/Admin/Dashboard';

export const routesHome = [
  {
    path: '/',
    exact: true,
    // auth check if user login then can access router
    auth: false,
    component: HomePage,
  },
  {
    path: '/sign-in',
    exact: false,
    // auth check if user login then can access router
    auth: false,
    component: HomePage,
  },
  {
    path: '/sign-up',
    exact: false,
    // auth check if user login then can access router
    auth: false,
    component: HomePage,
  },
];

export const routesAdmin = [
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
];
