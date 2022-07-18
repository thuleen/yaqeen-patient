import { INIT_APP, LOGIN, LOGIN_OK, LOGOUT, LOGOUT_OK } from "./action-type";

export interface InitAppPayload {
  appPassword: string;
}

export const initApp = (payload: InitAppPayload) => ({
  type: INIT_APP,
  payload,
});

export interface LoginPayload {
  idType: string;
  socialId: string;
}
export const login = (payload: LoginPayload) => ({
  type: LOGIN,
  payload,
});

export interface LoginOkPayload {
  token: string;
}

export const loginOK = (payload: LoginOkPayload) => ({
  type: LOGIN_OK,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutOK = () => ({
  type: LOGOUT_OK,
});
