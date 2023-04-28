import { fork, takeLatest } from 'redux-saga/effects';
import { GET_HOUSES } from './action-types';

//
// Watchers
//
function* getHousesWatcher(api: any) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  yield takeLatest(GET_HOUSES, getHousesWorker);
}

//
// Workers
//
function* getHousesWorker() {
  console.log('get houses worker');
}

export default function* rootSaga(api: any) {
  yield fork({
    context: null,
    fn: () => getHousesWatcher(api),
  });
}
