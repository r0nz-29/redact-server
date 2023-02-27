import {
  ADD_QUESTION,
  ADD_QUESTION_FAIL,
  ADD_QUESTION_SUCCESS, GET_LEETCODE_COUNT, GET_LEETCODE_COUNT_FAIL, GET_LEETCODE_COUNT_SUCCESS,
  GET_TOTAL_COUNT, GET_TOTAL_COUNT_FAIL,
  GET_TOTAL_COUNT_SUCCESS,
  SEARCH_QUESTION,
  SEARCH_QUESTION_FAIL,
  SEARCH_QUESTION_SUCCESS,
  UPDATE_QUESTION,
  UPDATE_QUESTION_FAIL,
  UPDATE_QUESTION_SUCCESS,
} from "./actionTypes";

export const addQuestion = payload => ({
  type: ADD_QUESTION, payload,
});

export const addQuestionSuccess = payload => ({
  type: ADD_QUESTION_SUCCESS, payload,
});

export const addQuestionFail = payload => ({
  type: ADD_QUESTION_FAIL, payload,
});

export const updateQuestion = payload => ({
  type: UPDATE_QUESTION, payload,
});

export const updateQuestionSuccess = payload => ({
  type: UPDATE_QUESTION_SUCCESS, payload,
});

export const updateQuestionFail = payload => ({
  type: UPDATE_QUESTION_FAIL, payload,
});

export const searchQuestion = payload => ({
  type: SEARCH_QUESTION, payload,
});

export const searchQuestionSuccess = payload => ({
  type: SEARCH_QUESTION_SUCCESS, payload,
});

export const searchQuestionFail = payload => ({
  type: SEARCH_QUESTION_FAIL, payload,
});

export const getTotalCount = () => ({
  type: GET_TOTAL_COUNT,
});

export const getTotalCountSuccess = payload => ({
  type: GET_TOTAL_COUNT_SUCCESS, payload,
});

export const getTotalCountFail = payload => ({
  type: GET_TOTAL_COUNT_FAIL, payload,
});

export const getLeetcodeCount = () => ({
  type: GET_LEETCODE_COUNT,
});

export const getLeetcodeCountSuccess = payload => ({
  type: GET_LEETCODE_COUNT_SUCCESS, payload,
});

export const getLeetcodeCountFail = payload => ({
  type: GET_LEETCODE_COUNT_FAIL, payload,
});