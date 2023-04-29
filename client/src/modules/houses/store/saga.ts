import { fork, takeLatest } from 'redux-saga/effects';

import { GET_HOUSES } from './action-types';

//
// Watchers
//
function* getHousesWatcher(api: any) {
  yield takeLatest(GET_HOUSES, getHousesWorker, api);
}

//
// Workers
//
function* getHousesWorker(api: any) {
  console.log({ api });
  console.log('get houses worker');
}

export default function* rootSaga(api: any) {
  yield fork(() => getHousesWatcher(api));
}
