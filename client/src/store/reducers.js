import userReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";
import listReducer from "./list/reducer";
import backlogReducer from "./backlogs/reducer";
import {combineReducers} from "redux";
import recentsReducer from "./recentSubmissions/reducer";
import searchReducer from "./search/reducer";

const rootReducer = combineReducers({
  auth: userReducer,
  profile: profileReducer,
  lists: listReducer,
  backlogs: backlogReducer,
  recents: recentsReducer,
  search: searchReducer,
});

export default rootReducer;