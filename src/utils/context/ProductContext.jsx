import {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
} from "react";
import { reducer } from "../reducers/ProductReducer";
import {
  Products_Loading,
  Products_Error,
  Products_Sucess,
  products_url,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_LOADING,
} from "../Actions";
let ProductContext = createContext();
let initialState = {
  products: [],
  products_loading: false,
  products_error: false,
  featured_products: [],
  single_product_loading: false,
  single_product: {},
  single_product_error: false,
};
function ProductContextProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let fetchProducts = async (url) => {
    dispatch({ type: Products_Loading });
    try {
      let data = await fetch(url);
      let json = await data.json();
      console.log(json);
      dispatch({ type: Products_Sucess, payload: json });
    } catch (err) {
      dispatch({ type: Products_Error });
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);
  let fetchSingleProduct = async (url) => {
    dispatch({ type: SINGLE_PRODUCT_LOADING });
    try {
      let res = await fetch(url);
      let json = await res.json();
      console.log(json);
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: json });
    } catch (err) {
      dispatch({ type: SINGLE_PRODUCT_ERROR });
    }
  };
  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;
export const useProductsContext = () => {
  return useContext(ProductContext);
};
