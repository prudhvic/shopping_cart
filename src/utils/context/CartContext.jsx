import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../Actions";
import reducer from "../reducers/cartReducer";
let CartContext = createContext({});
let getLoacalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
let initialState = {
  cart: getLoacalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

export default function CartContextProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  let addToCart = (id, product, amount) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, color: product.colors[0], amount, product },
    });
  };
  let toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  let removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  let clear_cart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, clear_cart, removeItem, addToCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
export let useCartContext = () => {
  return useContext(CartContext);
};
