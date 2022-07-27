import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as Action from "./actions";
import * as ActionType from "./action-type";
import * as Api from "../api";

function* login(action: any) {
  yield put(Action.loginOK({ token: "dummyToken" }));
}

function* logout() {
  yield put(Action.logoutOK());
}

function* getPatientSamples(action: any): any {
  const res = yield call(Api.getPatientSamples, { ...action.payload });
  if (!res.result.samples) {
    yield put(Action.getPatSamplesErr());
  }
  yield put(Action.getPatSamplesOK({ samples: res.result.samples }));
}

export default function* appSaga() {
  yield takeEvery(ActionType.LOGIN, login);
  yield takeEvery(ActionType.LOGOUT, logout);
  yield takeEvery(ActionType.GET_PTN_SMPLS, getPatientSamples);
}
