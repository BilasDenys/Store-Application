import { ProductsActions, ProductsActionTypes } from './actions';

export interface Store {
  product: any | undefined;
  allProducts: any;
  error: string | null;
}

const initialState: Store = {
  product: [],
  allProducts: [],
  error: null,
};

export const reducer = (state = initialState, action: ProductsActions) => {
  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCT:
      return { ...state };
    case ProductsActionTypes.LOAD_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };

    case ProductsActionTypes.LOAD_PRODUCT_EMPTY_TEMPLATE:
      return { ...state, product: [] };

    case ProductsActionTypes.LOAD_PRODUCT_FAIL:
      return { ...state, error: action.payload };

    case ProductsActionTypes.LOAD_ALL_PRODUCTS:
      return { ...state };

    default:
      return state;
  }
};
