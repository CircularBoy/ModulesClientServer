import modules from "../modules"
import {takeLatest, all} from "redux-saga/effects";
import api from "../api";

export default function* rootSaga () {

	const moduleSagaList = Object.values(modules).map((module) => {
		if(module.saga) {
			return takeLatest(module.startupAction || 'STARTUP', module.saga, api)
		}
	})
	yield all([...moduleSagaList])
}

