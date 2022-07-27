import * as ActionType from "./action-type";

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
    case ActionType.LOGIN_OK:
      return {
        ...state,
        token: action.payload.token,
      };
    case ActionType.LOGOUT_OK:
      return {
        ...state,
        token: null,
        isGuest: false,
      };
    case ActionType.LOGIN_AS_GUEST:
      return {
        ...state,
        token: null,
        isGuest: true,
      };
    default:
      return state;
  }
}
