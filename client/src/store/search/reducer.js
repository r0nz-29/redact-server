import {SEARCH_QUESTION, SEARCH_QUESTION_FAIL, SEARCH_QUESTION_SUCCESS} from "../question/actionTypes";

const INIT_STATE = {
  results: [], err: {}, searching: false,
};

function searchReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SEARCH_QUESTION:
      return {
        ...state,
        searching: true,
      };

    case SEARCH_QUESTION_SUCCESS:
      return {
        ...state,
        results: action.payload,
        searching: false,
      };

    case SEARCH_QUESTION_FAIL:
      return {
        ...state,
        searching: false,
        err: action.payload,
      };

    default:
      return state;
  }
}

export default searchReducer;
