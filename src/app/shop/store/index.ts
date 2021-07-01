import {  ActionReducerMap } from '@ngrx/store';
import * as fromProducts from './Products/reducer';
import * as fromSpinner from './Spinner/reducers';
import * as fromError from './Error/reducer';
import {ProductsEffects} from "./Products/effects";

export interface ProductsStore {
  products: fromProducts.State;
  spinner: fromSpinner.State;
  error: fromError.State;
}

export const reducer: ActionReducerMap<ProductsStore, any> = {
  products: fromProducts.reducer,
  spinner: fromSpinner.reducer,
  error: fromError.reducer
};

export  const effects: any= [ProductsEffects]
