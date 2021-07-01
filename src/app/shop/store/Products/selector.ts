import {createFeatureSelector, createSelector} from "@ngrx/store";
// import {AppStore} from "../index";
import {ProductsStore} from "../index";


export const featureProductSelector = createFeatureSelector<ProductsStore>('app');


export const SelectAllProducts = createSelector(
  featureProductSelector,
  (state) => state.products.allProducts
);


export const SelectSingleProduct = createSelector(
  featureProductSelector,
  (state) => state.products.singleProduct
)

