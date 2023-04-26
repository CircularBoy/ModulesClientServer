import {
	SIMPLE_ACTION_NAME
} from './action-types';

const stateName = 'blank';

const initialState = {
	_loadedAt: '',
	_updatedAt: '',
	_version: '1',
	data: []
};

function reducer(state = initialState, action = {}) {
	let curTime = new Date();
	switch (action.type) {
		case SIMPLE_ACTION_NAME:
			return {
				...state,
			};
		default:
			return state;
	}
}

export default {
	reducer,
	initialState,
	stateName
}
