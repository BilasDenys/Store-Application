import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  START_SPINNER = '[SPINNER] Start Spinner',
  FINISH_SPINNER = '[SPINNER] Finish Spinner',
}

export class StartSpinner implements Action {
  readonly type = SpinnerActionTypes.START_SPINNER;
}

export class FinishSpinner implements Action {
  readonly type = SpinnerActionTypes.FINISH_SPINNER;
}

export type SpinnerActions = StartSpinner | FinishSpinner;
