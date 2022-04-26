import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ProductContextProvider from "./utils/context/ProductContext";
import FilterContextProvider from "./utils/context/FilterContext";
import CartContextProvider from "./utils/context/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProductContextProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FilterContextProvider>
      </ProductContextProvider>
    </Router>
  </React.StrictMode>
);
