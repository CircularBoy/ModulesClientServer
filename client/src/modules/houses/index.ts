import saga from './store/saga';
import reducer from './store/reducer';
import router from './router';

// interface IModule {
//   saga: () => void;
//   reducer: {
//     initialState: any;
//     reducer: any;
//     stateName: string;
//   };
//   router: RouteObject[];
// }

console.log({ saga, reducer, router });
export default {
  saga,
  reducer,
  router,
};
