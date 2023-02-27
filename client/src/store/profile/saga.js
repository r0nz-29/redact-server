import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_PROFILE, UPDATE_COVER_IMAGE, UPDATE_PROFILE_IMAGE} from "./actionTypes";
import {
  getProfileFail,
  getProfileSuccess,
  updateProfileImgFail,
} from "./action";
import {_getProfile, _updateCoverImage, _updateProfileImage} from "../../api/user";

function* onGetProfile({payload: userId}) {
  try {
    const response = yield call(_getProfile, userId);
    yield put(getProfileSuccess(response));
  } catch (err) {
    yield put(getProfileFail(err));
  }
}

function* onUpdateProfileImage({payload}) {
  try {
    const response = yield call(_updateProfileImage, payload);
    yield put(getProfileSuccess(response));
  } catch (err) {
    yield put(updateProfileImgFail(err));
    console.log(err);
  }
}

function* onUpdateCoverImage({payload}) {
  try {
    const response = yield call(_updateCoverImage, payload);
    yield put(getProfileSuccess(response));
  } catch (err) {
    yield put(updateProfileImgFail(err));
    console.log(err);
  }
}

function* profileSaga() {
  yield takeEvery(GET_PROFILE, onGetProfile);
  yield takeEvery(UPDATE_PROFILE_IMAGE, onUpdateProfileImage);
  yield takeEvery(UPDATE_COVER_IMAGE, onUpdateCoverImage);
}

export default profileSaga;