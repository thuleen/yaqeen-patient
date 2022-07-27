import * as ActionType from "./action-type";

export interface InitAppPayload {
  appPassword: string;
}

export const initApp = (payload: InitAppPayload) => ({
  type: ActionType.INIT_APP,
  payload,
});

export const loginAsGuest = () => ({
  type: ActionType.LOGIN_AS_GUEST,
});

export interface LoginPayload {
  idType: string;
  socialId: string;
}
export const login = (payload: LoginPayload) => ({
  type: ActionType.LOGIN,
  payload,
});

export interface LoginOkPayload {
  token: string;
}

export const loginOK = (payload: LoginOkPayload) => ({
  type: ActionType.LOGIN_OK,
  payload,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});

export const logoutOK = () => ({
  type: ActionType.LOGOUT_OK,
});

export interface GetPatientSamples {
  idType: string;
  socialId: string;
}

export const getPatSamples = (payload: GetPatientSamples) => ({
  type: ActionType.GET_PTN_SMPLS,
  payload,
});

export const getPatSamplesOK = (payload: { samples: [] }) => ({
  type: ActionType.GET_PTN_SMPLS_OK,
  payload,
});

export const getPatSamplesErr = () => ({
  type: ActionType.GET_PTN_SMPLS_ERR,
});
