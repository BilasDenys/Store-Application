import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromSpinner from './Spinner/reducers';
import * as fromProducts from './Products/reducer';

export interface ShopStore {
  spinner: fromSpinner.Store;
  products: fromProducts.Store;
}

export const reducer: ActionReducerMap<ShopStore> = {
  spinner: fromSpinner.reducer,
  products: fromProducts.reducer,
};
