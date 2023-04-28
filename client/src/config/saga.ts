import modules from '../modules';
import { takeLatest, all } from 'redux-saga/effects';
import api from '../api';

export default function* rootSaga(pattern: any, worker: any) {
  const moduleSagaList = Object.values(modules).map((module) => {
    console.log({ moduleSagaList });
    if (module.saga) {
      return takeLatest('STARTUP', module.saga, api);
    }
  });
  yield all([...moduleSagaList]);
}
