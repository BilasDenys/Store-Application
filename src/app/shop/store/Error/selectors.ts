import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsStore} from "../index";


export const featureErrorSelector = createFeatureSelector<ProductsStore>('app');

export const SelectError = createSelector(
  featureErrorSelector,
  (state: ProductsStore) => state.error.error
)
