import { fork, takeLatest, put } from "redux-saga/effects"
import {ANOTHER_SIMPLE_ACTION_NAME, SIMPLE_ACTION_NAME, STARTUP} from "./action-types";
import {blancAction} from "./actions";

export default function* (api) {
	yield fork(startUpWatcher, api);
	yield fork(simpleWatcher, api);
}

//
// Watchers
//
function* simpleWatcher(api) {
	yield takeLatest(SIMPLE_ACTION_NAME, simpleWorker, api);
}

function* startUpWatcher() {
	yield takeLatest(STARTUP, startUpWorker);
}

//
// Workers
//
function* simpleWorker(api) {
	console.log('sagas work simple worker', api)
}

function* startUpWorker(api) {
	try {
		console.log('sagas work in start up 1')
		yield put(blancAction())
	} catch (e) {
		console.log(e)
	}

}
