import {applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";
import reducers from "./reducers"
const {createStore, compose} = require("redux");
const enhancers = []
const middlewares = []

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push( applyMiddleware( ...middlewares ) );
// const reducer = combineReducers(reducers);
const rootReducer = combineReducers(reducers);
const storeData = {};

const store = createStore(rootReducer, compose(...enhancers));

// Start sagas
sagaMiddleware.run(rootSaga, store);
export default store
