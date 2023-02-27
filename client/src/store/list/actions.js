import {
	ADD_LIST,
	ADD_LIST_FAIL,
	ADD_LIST_SUCCESS,
	GET_LIST,
	GET_LIST_FAIL,
	GET_LIST_SUCCESS,
	GET_LISTS,
	GET_LISTS_FAIL,
	GET_LISTS_SUCCESS
} from "./actionTypes";

export const getLists = () => ({
	type: GET_LISTS
});

export const getListsSuccess = boards => ({
	type: GET_LISTS_SUCCESS,
	payload: boards
});

export const getListsFail = err => ({
	type: GET_LISTS_FAIL,
	payload: err
});

export const getList = listId => ({
	type: GET_LIST,
	payload: listId
});

export const getListSuccess = list => ({
	type: GET_LIST_SUCCESS,
	payload: list
});

export const getListFail = err => ({
	type: GET_LIST_FAIL,
	payload: err
});

export const addList = payload => ({
	type: ADD_LIST,
	payload
});

export const addListSuccess = lists => ({
	type: ADD_LIST_SUCCESS,
	payload: lists
});

export const addListFail = err => ({
	type: ADD_LIST_FAIL,
	payload: err
});