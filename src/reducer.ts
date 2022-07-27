import { combineReducers } from "redux";
import reducerApp from "./redux-saga/reducer";

const reducer = combineReducers({
  app: reducerApp,
});

export default reducer;
