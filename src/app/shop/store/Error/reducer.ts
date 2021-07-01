import {ErrorActions, ErrorActionTypes} from "./actions";

export interface State {
  error: string | null;
}

const initialState: State = {
  error: null
}

export const reducer = (state = initialState, action: ErrorActions) => {
  switch (action.type) {
    case ErrorActionTypes.SET_ERROR:
      return {...state, error: action.payload}
    case ErrorActionTypes.REMOVE_ERROR:
      return {...state, error: null}
    default:
      return state;
  }
}
