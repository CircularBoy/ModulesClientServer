import { take, takeLatest, all } from 'redux-saga/effects';

import modules from '../modules';

export default function* rootSaga(api: any) {
  const moduleSagaList = Object.values(modules).map((module) => {
    if (module.saga) {
      return takeLatest('STARTAPP', module.saga, api);
    }
  });

  yield all([...moduleSagaList]);
  console.log({ moduleSagaList });

  yield take('STARTAPP');
}
