import { createBrowserRouter, RouteObject } from 'react-router-dom';

import modules from '../modules';

const allModules = {
  ...modules,
};

const arr: RouteObject[] = [];
Object.values(allModules).forEach((module: any) => {
  module.router.forEach((route: RouteObject) => {
    arr.push(route);
  });
});

const router = createBrowserRouter(arr);

export default router;
