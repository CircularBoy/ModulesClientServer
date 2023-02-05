import {SIMPLE_ACTION_NAME, STARTUP} from "./action-types";

export function blancAction(payload) {
	return {
		type: SIMPLE_ACTION_NAME,
		payload,
	};
}

export function startUp(payload) {
	return {
		type: STARTUP,
		payload,
	};
}
