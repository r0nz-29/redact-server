import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS, UPDATE_COVER_IMAGE,
  UPDATE_COVER_IMAGE_SUCCESS,
  UPDATE_PROFILE_IMAGE, UPDATE_PROFILE_IMAGE_FAIL, UPDATE_PROFILE_IMAGE_SUCCESS
} from "./actionTypes";

export const getProfile = userId => ({
  type: GET_PROFILE,
  payload: userId
});

export const getProfileSuccess = profile => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile
});

export const getProfileFail = err => ({
  type: GET_PROFILE_FAIL,
  payload: err
});

export const updateProfileImg = payload => ({
  type: UPDATE_PROFILE_IMAGE,
  payload,
});

export const updateProfileImgSuccess = profile => ({
  type: UPDATE_PROFILE_IMAGE_SUCCESS,
  payload: profile
});

export const updateCoverImg = payload => ({
  type: UPDATE_COVER_IMAGE,
  payload,
});

export const updateCoverImgSuccess = profile => ({
  type: UPDATE_COVER_IMAGE_SUCCESS,
  payload: profile
});

export const updateProfileImgFail = err => ({
  type: UPDATE_PROFILE_IMAGE_FAIL,
  payload: err
});