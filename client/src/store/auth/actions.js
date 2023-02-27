import {
  GUEST_LOGIN,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "./actionTypes";

export const login = payload => ({
  type: LOGIN,
  payload
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFail = err => ({
  type: LOGIN_FAIL,
  payload: err
});

export const register = payload => ({
  type: REGISTER,
  payload
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user
});

export const registerFail = err => ({
  type: REGISTER_FAIL,
  payload: err
});

export const logout = () => ({
  type: LOGOUT,
})

export const guestLogin = () => ({
  type: GUEST_LOGIN,
})