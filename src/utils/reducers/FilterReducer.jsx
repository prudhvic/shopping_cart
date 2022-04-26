import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../Actions";

export default function reducer(state, action) {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = Math.max(...action.payload.map((p) => p.price));
    console.log(maxPrice);
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SORT_PRODUCTS) {
    let temp_products = [...state.filtered_products];
    if (state.sort === "price-lowest") {
      temp_products = temp_products.sort((a, b) => a.price - b.price);
    }
    if (state.sort === "price-highest") {
      temp_products = temp_products.sort((a, b) => b.price - a.price);
    }
    if (state.sort === "name-a") {
      temp_products = temp_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (state.sort === "name-z") {
      temp_products = temp_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    return { ...state, filtered_products: temp_products };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === UPDATE_FILTERS) {
    let { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    let temp_products = [...state.all_products];
    let { text, shipping, category, color, company, price } = state.filters;
    if (text) {
      temp_products = temp_products.filter((p) => {
        return p.name.toLowerCase().includes(text.toLowerCase());
      });
    }
    if (shipping) {
      temp_products = temp_products.filter((p) => p.shipping);
    }
    if (category !== "all") {
      temp_products = temp_products.filter(
        (item) => item.category === category
      );
    }
    if (company !== "all") {
      temp_products = temp_products.filter(
        (product) => product.company === company
      );
    }
    temp_products = temp_products.filter((item) => item.price <= price);
    if (color !== "all") {
      temp_products = temp_products.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    return { ...state, filtered_products: temp_products };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  return state;
}
