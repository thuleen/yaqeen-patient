import * as ActionType from "./action-type";

export interface AppReducerState {
  samples: [] | null;
  pending: boolean;
  errMsg: string | null;
}

const initialState = {
  samples: null,
  pending: false,
  errMsg: null,
};

export default function appReducer(
  state: AppReducerState = initialState,
  action: any
) {
  switch (action.type) {
    case ActionType.GET_PTN_SMPLS:
      return {
        ...state,
        samples: null,
        errMsg: null,
        pending: true,
      };
    case ActionType.GET_PTN_SMPLS_ERR:
      return {
        ...state,
        samples: null,
        errMsg: "Sorry, we could not find your record",
        pending: false,
      };
    case ActionType.GET_PTN_SMPLS_OK:
      return {
        ...state,
        samples: action.payload.samples,
        pending: false,
        errMsg: null,
      };
    case ActionType.LOGOUT_OK:
      return {
        ...state,
        samples: null,
        pending: false,
        errMsg: null,
      };
    default:
      return state;
  }
}
