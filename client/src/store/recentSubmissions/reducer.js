import {GET_RECENTS, GET_RECENTS_FAIL, GET_RECENTS_SUCCESS} from "./actionTypes";

const INIT_STATE = {
	recents: [], err: {}, loading: false, processing: false
};

function recentsReducer(state = INIT_STATE, action) {
	switch (action.type) {

		case GET_RECENTS:
			return {
				...state, loading: true
			};

		case GET_RECENTS_SUCCESS:
			return {
				...state, recents: action.payload, loading: false
			};

		case GET_RECENTS_FAIL:
			return {
				...state, err: action.payload, loading: false
			};

		default:
			return {...state};
	}
}

export default recentsReducer;