import {GET_RECENTS, GET_RECENTS_FAIL, GET_RECENTS_SUCCESS} from "./actionTypes";

export const getRecents = () => ({
	type: GET_RECENTS
});

export const getRecentsSuccess = boards => ({
	type: GET_RECENTS_SUCCESS,
	payload: boards
});

export const getRecentsFail = err => ({
	type: GET_RECENTS_FAIL,
	payload: err
});