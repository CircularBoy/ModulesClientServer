import api from './api';
import router from './router';
import reducer from './store/reducer';
import saga from './store/saga';

// export interface IModule {
//   saga: () => void;
//   reducer: {
//     initialState: any;
//     reducer: any;
//     stateName: string;
//   };
//   router: RouteObject[];
// }
const modules = {
  saga,
  reducer,
  router,
  api,
};

export default modules;
