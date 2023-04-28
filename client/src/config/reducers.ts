import modules from '../modules';
import { ReducersMapObject } from 'redux';

type ModuleReducer = {
  stateName: string;
  reducer: any;
};

const reducers: ReducersMapObject = {};

Object.values<any>(modules).forEach((module) => {
  if (module?.reducer && typeof module.reducer === 'object') {
    const moduleReducer = module.reducer as ModuleReducer;

    reducers[moduleReducer.stateName] = moduleReducer.reducer;
  }
});

export default reducers;
