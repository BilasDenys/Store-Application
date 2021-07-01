import {Action} from "@ngrx/store";

export enum ErrorActionTypes {
  SET_ERROR = '[ERROR] Set Error',
  REMOVE_ERROR = '[ERROR] Remove Error'
}

export class SetError implements Action {
  readonly type = ErrorActionTypes.SET_ERROR;

  constructor(public payload: string) {
  }
}

export class RemoveError implements Action {
  readonly type = ErrorActionTypes.REMOVE_ERROR;
}

export type ErrorActions = SetError | RemoveError;
