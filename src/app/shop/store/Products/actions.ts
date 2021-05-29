import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  LOAD_PRODUCT = '[PRODUCTS] Load Products',
  LOAD_PRODUCT_SUCCESS = '[PRODUCTS] Load Products Success',
  LOAD_PRODUCT_FAIL = '[PRODUCTS] Load Products Fail',
  LOAD_PRODUCT_EMPTY_TEMPLATE = '[PRODUCTS] Load Product empty template',

  LOAD_ALL_PRODUCTS = '[PRODUCTS] Load All Products',
  LOAD_ALL_PRODUCTS_SUCCESS = '[PRODUCTS] Load All Products',
  LOAD_ALL_PRODUCTS_FAIL = '[PRODUCTS] Load All Products',
}

export class LoadProduct implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCT;
}

export class LoadProductSuccess implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadProductFail implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCT_FAIL;
  constructor(public payload: any) {}
}

export class LoadEmptyProductTemplate implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCT_EMPTY_TEMPLATE;
}

export class LoadAllProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_ALL_PRODUCTS;
}

export class LoadAllProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LOAD_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadAllProductsFail implements Action {
  readonly type = ProductsActionTypes.LOAD_ALL_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export type ProductsActions =
  | LoadProduct
  | LoadAllProducts
  | LoadEmptyProductTemplate
  | LoadProductSuccess
  | LoadProductFail
  | LoadAllProductsSuccess
  | LoadAllProductsFail;
