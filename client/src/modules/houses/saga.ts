import { fork, takeLatest } from "redux-saga/effects"
import { GET_HOUSES } from "./action-types";

export default function* (api) {
	yield fork(getHousesWatcher, api);
}

//
// Watchers
//
function* getHousesWatcher() {
	yield takeLatest(GET_HOUSES, getHousesWorker);
}

//
// Workers
//
function* getHousesWorker() {
	console.log('get houses worker')
}
