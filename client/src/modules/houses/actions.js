import {GET_HOUSES} from "./action-types";

export function getHouses(payload) {
	return {
		type: GET_HOUSES,
		payload,
	};
}
