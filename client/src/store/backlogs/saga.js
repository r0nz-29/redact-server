import {call, put, takeEvery} from "redux-saga/effects";
import {GET_BACKLOGS} from "./actionTypes";
import {_getBacklogs} from "../../api/backlogs";
import {getBacklogsFail, getBacklogsSuccess} from "./actions";

function* onGetBacklogs() {
	try {
		const response = yield call(_getBacklogs);
		yield put(getBacklogsSuccess(response));
	} catch (err) {
		console.log(err);
		yield put(getBacklogsFail(err));
	}
}

function* backlogSaga() {
	yield takeEvery(GET_BACKLOGS, onGetBacklogs);
}

export default backlogSaga;