import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import reducers from './reducers';

const enhancers = [];
const middlewares = [];

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));
// const reducer = combineReducers(reducers);
const rootReducer = combineReducers(reducers);
const storeData = {};

const store = createStore(rootReducer, compose(...enhancers));

// Start sagas
sagaMiddleware.run(rootSaga, store.dispatch, store.getState);
export default store;
