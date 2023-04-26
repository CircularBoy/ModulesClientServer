import { fork, takeLatest, put } from 'redux-saga/effects';
import {
  ANOTHER_SIMPLE_ACTION_NAME,
  SIMPLE_ACTION_NAME,
  STARTUP,
} from './action-types';
import { blancAction } from './actions';

//
// Watchers
//
function* simpleWatcher(api: any) {
  yield takeLatest(SIMPLE_ACTION_NAME, simpleWorker, api);
}

function* startUpWatcher(api: any) {
  yield takeLatest(STARTUP, startUpWorker);
}

//
// Workers
//
function* simpleWorker(api: any) {
  console.log('sagas work simple worker', api);
}

function* startUpWorker(api: any, action) {
  try {
    console.log('sagas work in start up 1');
    yield put(blancAction(api));
  } catch (e) {
    console.log(e);
  }
}

export default function* (api: any) {
  yield fork(startUpWatcher, api);
  yield fork(simpleWatcher, api);
}
