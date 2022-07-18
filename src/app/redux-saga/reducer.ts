import { LOGIN_AS_GUEST, LOGIN_OK, LOGOUT_OK } from "./action-type";

export interface AppReducerState {
  token: string | null;
  isGuest: boolean;
}

const initialState = {
  token: null,
  isGuest: false,
};

export default function appReducer(
  state: AppReducerState = initialState,
  action: any
) {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGOUT_OK:
      return {
        ...state,
        token: null,
        isGuest: false,
      };
    case LOGIN_AS_GUEST:
      return {
        ...state,
        token: null,
        isGuest: true,
      };
    default:
      return state;
  }
}
