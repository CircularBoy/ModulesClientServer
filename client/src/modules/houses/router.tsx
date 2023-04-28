import { RouteObject } from 'react-router-dom';
import Component from './components';

const routes: RouteObject[] = [
  {
    path: '/',
    element: Component(),
  },
  {
    path: '/house',
    element: Component(),
  },
];

export default routes;
