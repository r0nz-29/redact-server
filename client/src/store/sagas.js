import {all, fork} from "redux-saga/effects";
import userSaga from "./auth/saga";
import profileSaga from "./profile/saga";
import listSaga from "./list/saga";
import questionSaga from "./question/saga";
import backlogSaga from "./backlogs/saga";
import recentsSaga from "./recentSubmissions/saga";

function* rootSaga() {
	yield all([
		fork(userSaga),
		fork(profileSaga),
		fork(listSaga),
		fork(questionSaga),
		fork(backlogSaga),
		fork(recentsSaga)
	]);
}

export default rootSaga;