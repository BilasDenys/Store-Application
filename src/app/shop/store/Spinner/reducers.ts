import { SpinnerActions, SpinnerActionTypes } from './actions';

export interface Store {
  isLoading: boolean;
}

const initialState: Store = {
  isLoading: false,
};
export const reducer = (state = initialState, action: SpinnerActions) => {
  switch (action.type) {
    case SpinnerActionTypes.START_SPINNER:
      return { ...state, isLoading: true };

    case SpinnerActionTypes.FINISH_SPINNER:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
