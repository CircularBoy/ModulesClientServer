import { fork, takeLatest } from 'redux-saga/effects';

import { BLANK, STARTAPP } from './action-types';

//
// Watchers
//
function* blankWatcher(api: any) {
  yield takeLatest(BLANK, blankWorker, api);
}

function* startAppWatcher() {
  yield takeLatest(STARTAPP, startAppWorker);
}

//
// Workers
//
function* blankWorker(api: any) {
  console.log('blank worker', api);
}

function* startAppWorker() {
  console.log('start app worker');
}

export default function* rootSaga(api: any) {
  yield fork(startAppWatcher);
  yield fork(blankWatcher, api);
}
