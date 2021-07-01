import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductsStore} from "../index";


export const featureProductSelector = createFeatureSelector<ProductsStore>('app');

export const SelectSpinner = createSelector(
  featureProductSelector,
  (state: ProductsStore) => state.spinner.isLoading
)
