import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as Action from "./actions";
import * as ActionType from "./action-type";

function* login(action: any) {
  yield put(Action.loginOK({ token: "dummyToken" }));
}

function* logout() {
  yield put(Action.logoutOK());
}

export default function* appSaga() {
  yield takeEvery(ActionType.LOGIN, login);
  yield takeEvery(ActionType.LOGOUT, logout);
}
