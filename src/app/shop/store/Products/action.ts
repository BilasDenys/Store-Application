import {Action} from "@ngrx/store";

export enum ProductsActionTypes {

  FETCH_ALL_PRODUCTS = '[PRODUCTS] FETCH ALL PRODUCTS',
  FETCH_ALL_PRODUCTS_SUCCESS = '[PRODUCTS] FETCH ALL PRODUCTS SUCCESS',
  FETCH_ALL_PRODUCTS_FAIL = '[PRODUCTS] FETCH ALL PRODUCTS FAIL',

  SELECT_PRODUCT = '[PRODUCTS] SELECT PRODUCT',
  SELECTED_PRODUCTS = '[PRODUCTS] SELECTED PRODUCT',
  REMOVE_SELECTED_PRODUCT = '[PRODUCT] REMOVE SELECTED PRODUCT'
}


export class FetchAllProducts implements Action {
  readonly type = ProductsActionTypes.FETCH_ALL_PRODUCTS
}

export class FetchAllProductsSuccess implements Action {
  readonly type = ProductsActionTypes.FETCH_ALL_PRODUCTS_SUCCESS;

  constructor(public payload: any[]) {
  }
}

export class FetchAllProductsFail implements Action {
  readonly type = ProductsActionTypes.FETCH_ALL_PRODUCTS_FAIL;

  constructor(public payload: string) {
  }
}

export class SelectProduct implements Action {
  readonly type = ProductsActionTypes.SELECT_PRODUCT;
}

export class SelectedProduct implements Action {
  readonly type = ProductsActionTypes.SELECTED_PRODUCTS;

  constructor(public payload: any) {
  }
}

export class RemoveSelectedProduct implements Action {
  readonly type = ProductsActionTypes.REMOVE_SELECTED_PRODUCT;

}

export type ProductsActions =
  FetchAllProducts
  | FetchAllProductsSuccess
  | FetchAllProductsFail
  | SelectProduct
  | SelectedProduct
  | RemoveSelectedProduct;
