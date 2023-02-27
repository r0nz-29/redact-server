import {GET_BACKLOGS, GET_BACKLOGS_FAIL, GET_BACKLOGS_SUCCESS} from "./actionTypes";

export const getBacklogs = () => ({
	type: GET_BACKLOGS
});

export const getBacklogsSuccess = boards => ({
	type: GET_BACKLOGS_SUCCESS,
	payload: boards
});

export const getBacklogsFail = err => ({
	type: GET_BACKLOGS_FAIL,
	payload: err
});