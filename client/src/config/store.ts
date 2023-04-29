import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import api from '../api';
import reducers from './reducers';
import rootSaga from './saga';

const enhancers = [];
const middlewares = [];

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));
// const reducer = combineReducers(reducers);
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, compose(...enhancers));

// Start sagas
sagaMiddleware.run(() => rootSaga(api));
export default store;
