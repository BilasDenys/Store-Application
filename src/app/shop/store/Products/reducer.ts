import {ProductsActions, ProductsActionTypes} from "./action";

export interface State {
  allProducts: any[];
  singleProduct: null | {};
}

const initialState: State = {
  allProducts: [],
  singleProduct: {},
}


export const reducer = (state = initialState, action: ProductsActions) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_ALL_PRODUCTS:
      return {
        ...state,
      }
    case ProductsActionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: action.payload
      }
    case ProductsActionTypes.FETCH_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case ProductsActionTypes.SELECT_PRODUCT:
      return {
        ...state,
      }
    case ProductsActionTypes.SELECTED_PRODUCTS:
      return {
        ...state,
        singleProduct: action.payload
      }
    case ProductsActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        singleProduct: null
      }
    default:
      return state;
  }
}
