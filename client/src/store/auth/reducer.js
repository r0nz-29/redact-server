import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS} from "./actionTypes";

const existingUser = JSON.parse(localStorage.getItem("redact-user"));

const INIT_STATE = {
	user: existingUser ? existingUser : {},
	processing: false,
	error: {},
	loggedIn: !!existingUser,
}

export default function userReducer(state = INIT_STATE, action) {
	switch (action.type) {

		case LOGIN:
		case REGISTER:
			return {
				...state,
				processing: true
			}

		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				user: action.payload,
				loggedIn: true,
			}

		case LOGIN_FAIL:
		case REGISTER_FAIL:
			return {
				...state,
				error: action.payload
			}

		case LOGOUT:
			return {
				...state,
				user: {},
				loggedIn: false
			}

		default:
			return {...state}
	}
}