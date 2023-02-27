import {GET_BACKLOGS, GET_BACKLOGS_FAIL, GET_BACKLOGS_SUCCESS} from "./actionTypes";

const INIT_STATE = {
	backlogs: [], err: {}, loading: false, processing: false
};

function backlogReducer(state = INIT_STATE, action) {
	switch (action.type) {

		case GET_BACKLOGS:
			return {
				...state, loading: true
			};

		case GET_BACKLOGS_SUCCESS:
			return {
				...state, backlogs: action.payload, loading: false
			};

		case GET_BACKLOGS_FAIL:
			return {
				...state, err: action.payload, loading: false
			};

		default:
			return {...state};
	}
}

export default backlogReducer;