import {call, put, takeEvery} from "redux-saga/effects";
import {GET_RECENTS} from "./actionTypes";
import {getRecentsFail, getRecentsSuccess} from "./actions";
import {_getRecents} from "../../api/recentSubmissions";

function* onGetRecents() {
	try {
		const response = yield call(_getRecents);
		yield put(getRecentsSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(getRecentsFail(err));
	}
}

function* recentsSaga() {
	yield takeEvery(GET_RECENTS, onGetRecents);
}

export default recentsSaga;