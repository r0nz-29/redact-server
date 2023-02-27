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
import {
	ADD_QUESTION,
	ADD_QUESTION_FAIL,
	ADD_QUESTION_SUCCESS,
	GET_LEETCODE_COUNT, GET_LEETCODE_COUNT_FAIL,
	GET_LEETCODE_COUNT_SUCCESS,
	GET_TOTAL_COUNT,
	GET_TOTAL_COUNT_FAIL,
	GET_TOTAL_COUNT_SUCCESS,
	UPDATE_QUESTION,
	UPDATE_QUESTION_SUCCESS,
} from "../question/actionTypes";

const INIT_STATE = {
	lists: [], err: {}, currentList: {}, loading: false, processing: false, totalQuestions: null, leetcodeCount: null, fetchingCount: false,
};

function listReducer(state = INIT_STATE, action) {
	switch (action.type) {

		case GET_LISTS:
		case GET_LIST:
			return {
				...state, loading: true
			};
			
		case GET_TOTAL_COUNT:
		case GET_LEETCODE_COUNT:
			return {...state, fetchingCount: true}
		
		case GET_TOTAL_COUNT_SUCCESS:
			return {...state, totalQuestions: action.payload, fetchingCount: false}

		case GET_LEETCODE_COUNT_SUCCESS:
			return {...state, leetcodeCount: action.payload, fetchingCount: false}

		case GET_TOTAL_COUNT_FAIL:
		case GET_LEETCODE_COUNT_FAIL:
			return {...state, err: action.payload, fetchingCount: false}

		case ADD_LIST:
		case ADD_QUESTION:
		case UPDATE_QUESTION:
			return {
				...state, processing: true
			};

		case GET_LISTS_SUCCESS:
			return {
				...state, lists: action.payload, loading: false
			};

		case ADD_LIST_SUCCESS:
			return {
				...state,
				lists: action.payload,
				processing: false
			};

		case ADD_QUESTION_SUCCESS:
			return {
				...state, currentList: action.payload, processing: false
			};

		case GET_LIST_SUCCESS:
			return {
				...state, currentList: action.payload, loading: false
			};

		case UPDATE_QUESTION_SUCCESS:
			return {
				...state,
				currentList: action.payload,
				processing: false
			};

		case GET_LISTS_FAIL:
		case GET_LIST_FAIL:
			return {
				...state, err: action.payload, loading: false
			};

		case ADD_LIST_FAIL:
		case ADD_QUESTION_FAIL:
			return {
				...state, err: action.payload, processing: false
			};

		default:
			return {...state};
	}
}

export default listReducer;