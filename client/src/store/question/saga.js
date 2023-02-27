import {call, put, takeEvery} from "redux-saga/effects";
import {ADD_QUESTION, GET_LEETCODE_COUNT, GET_TOTAL_COUNT, SEARCH_QUESTION, UPDATE_QUESTION} from "./actionTypes";
import {_addQuestion, _getTotalCount, _getTotalLeetcodeCount, _searchQuestion, _updateQuestion} from "../../api/list";
import {
	addQuestionFail,
	addQuestionSuccess,
	getLeetcodeCountFail,
	getLeetcodeCountSuccess,
	getTotalCountFail,
	getTotalCountSuccess,
	searchQuestionFail,
	searchQuestionSuccess,
	updateQuestionFail,
	updateQuestionSuccess,
} from "./actions";
import {getBacklogs} from "../backlogs/actions";

function* onAddQuestion({payload}) {
	try {
		const response = yield call(_addQuestion, payload);
		yield put(addQuestionSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(addQuestionFail(err));
	}
}

function* onUpdateQuestion({payload}) {
	try {
		const response = yield call(_updateQuestion, payload);
		yield put(updateQuestionSuccess(response));
		yield put(getBacklogs());
	} catch (err) {
		console.log(err);
		yield put(updateQuestionFail(err));
	}
}

function* onSearchQuestion({payload}) {
	try {
		const response = yield call(_searchQuestion, payload);
		yield put(searchQuestionSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(searchQuestionFail(err));
	}
}

function* onGetTotalCount() {
	try {
		const response = yield call(_getTotalCount);
		yield put(getTotalCountSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(getTotalCountFail(err));
	}
}

function* onGetLeetcodeCount() {
	try {
		const response = yield call(_getTotalLeetcodeCount);
		yield put(getLeetcodeCountSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(getLeetcodeCountFail(err));
	}
}

function* questionSaga() {
	yield takeEvery(ADD_QUESTION, onAddQuestion);
	yield takeEvery(UPDATE_QUESTION, onUpdateQuestion);
	yield takeEvery(SEARCH_QUESTION, onSearchQuestion);
	yield takeEvery(GET_TOTAL_COUNT, onGetTotalCount);
	yield takeEvery(GET_LEETCODE_COUNT, onGetLeetcodeCount);
}

export default questionSaga;