import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_COVER_IMAGE,
  UPDATE_PROFILE_IMAGE
} from "./actionTypes";

const INIT_STATE = {
  profile: {},
  processing: false,
  err: null
}

function profileReducer(state = INIT_STATE, action) {
  switch (action.type) {

    case GET_PROFILE:
    case UPDATE_PROFILE_IMAGE:
    case UPDATE_COVER_IMAGE:
      return {
        ...state,
        processing: true,
      }

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        processing: false,
      }

    case GET_PROFILE_FAIL:
      return {
        ...state,
        err: action.payload,
        processing: false,
      }

    default:
      return {...state}
  }
}

export default profileReducer;