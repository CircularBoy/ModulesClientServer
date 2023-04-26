import modules from "../modules"
import {takeLatest, all} from "redux-saga/effects";
import api from "../api";

// export default function* rootSaga(pattern, worker) {
//
// 	const moduleSagaList = Object.values(modules).map((module) => {
// 		if(module.saga) {
// 			return takeLatest('STARTUP', module.saga, api)
// 		}
// 	})
// 	yield all([...moduleSagaList])
// }

