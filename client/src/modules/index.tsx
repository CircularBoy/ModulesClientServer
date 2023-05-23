import { RouteObject } from 'react-router-dom';

import { ApiType } from '../api';
import _blank from './_blank';
import houses from './houses';

export interface IModule {
  saga: () => Generator<any, void, unknown>;
  reducer: {
    initialState: any;
    reducer: any;
    stateName: string;
  };
  router: RouteObject[];
  api: ApiType;
}
// console.dir({
// 	_blank,
// 	houses
// })
export default {
  _blank,
  houses,
};
