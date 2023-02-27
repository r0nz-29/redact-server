import {GUEST_LOGIN, LOGIN, LOGOUT, REGISTER} from "./actionTypes";
import {call, put, takeEvery} from 'redux-saga/effects';
import {_loginUser, _logoutUser, _registerUser, _requestGuestLogin} from "../../api/user";
import {loginFail, loginSuccess, registerFail, registerSuccess} from "./actions";

function* onLogin({payload: user}) {
  try {
    const response = yield call(_loginUser, user);
    yield put(loginSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loginFail(err));
  }
}

function* onGuestLogin() {
  try {
    const response = yield call(_requestGuestLogin);
    yield put(loginSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loginFail(err));
  }
}


function* onRegister({payload: user}) {
  try {
    const response = yield call(_registerUser, user);
    yield put(registerSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(registerFail(err));
  }
}

function* onLogout() {
  try {
    yield call(_logoutUser);
  } catch (err) {
    console.log(err);
  }
}

function* userSaga() {
  yield takeEvery(LOGIN, onLogin);
  yield takeEvery(GUEST_LOGIN, onGuestLogin);
  yield takeEvery(REGISTER, onRegister);
  yield takeEvery(LOGOUT, onLogout);
}

export default userSaga;