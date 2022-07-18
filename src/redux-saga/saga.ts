import { all } from "redux-saga/effects";
import appSaga from "../app/redux-saga/saga";

export default function* rootSaga() {
  yield all([appSaga()]);
}
