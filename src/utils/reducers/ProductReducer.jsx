import {
  Products_Loading,
  Products_Sucess,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_LOADING,
  Products_Error,
} from "../Actions";

export function reducer(state, action) {
  if (action.type === Products_Error) {
    return { ...state, products_error: true, products_loading: false };
  }
  if (action.type === Products_Loading) {
    return { ...state, products_error: false, products_loading: true };
  }
  if (action.type === Products_Sucess) {
    let featured_products = action.payload.filter((item) => item.featured);
    console.log(featured_products);
    return {
      ...state,
      products: action.payload,
      products_loading: false,
      featured_products,
    };
  }
  if (action.type === SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_error: true,
      single_product_loading: false,
    };
  }
  if (action.type === SINGLE_PRODUCT_LOADING) {
    return {
      ...state,
      single_product_error: false,
      single_product_loading: true,
    };
  }
  if (action.type === SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product: action.payload,
      single_product_loading: false,
    };
  }
  return state;
}
