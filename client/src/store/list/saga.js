import {call, put, takeEvery} from "redux-saga/effects";
import {ADD_LIST, GET_LIST, GET_LISTS} from "./actionTypes";
import {_addList, _getList, _getLists} from "../../api/list";
import {addListFail, addListSuccess, getListFail, getListsFail, getListsSuccess, getListSuccess} from "./actions";

function* onGetLists() {
	try {
		const response = yield call(_getLists);
		yield put(getListsSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(getListsFail(err));
	}
}

function* onGetList({payload: listId}) {
	try {
		const response = yield call(_getList, listId);
		yield put(getListSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(getListFail(err));
	}
}

function* onAddList({payload}) {
	try {
		const response = yield call(_addList, payload);
		yield put(addListSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(addListFail(err));
	}
}


function* listSaga() {
	yield takeEvery(GET_LISTS, onGetLists);
	yield takeEvery(GET_LIST, onGetList);
	yield takeEvery(ADD_LIST, onAddList);
}

export default listSaga;