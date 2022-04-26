import {
  createContext,
  useEffect,
  useState,
  useReducer,
  useContext,
} from "react";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../Actions";
import reducer from "../reducers/FilterReducer";
import { useProductsContext } from "./ProductContext";
let FilterContext = createContext({});
let initialState = {
  filtered_products: [],
  all_products: [],
  sort: "price-highest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export default function FilterContextProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let { products } = useProductsContext();
  //   console.log(products);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  useEffect(() => {
    console.log("Hi form");
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.filters, state.sort, products]);
  let update_sort = (e) => {
    let value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  let updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent.trim();
    }
    if (name === "color") {
      value = e.target.dataset.color;
      console.log(value);
    }
    if (name == "shipping") {
      value = e.target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  let clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, clearFilters, updateFilters, update_sort }}
    >
      {children}
    </FilterContext.Provider>
  );
}
export let useFilterContext = () => {
  return useContext(FilterContext);
};
