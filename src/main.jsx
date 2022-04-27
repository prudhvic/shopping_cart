import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductContextProvider from "./utils/context/ProductContext";
import FilterContextProvider from "./utils/context/FilterContext";
import CartContextProvider from "./utils/context/CartContext";
import UserContextProvider from "./utils/context/UserContext";
//dev-otx3ckk6.us.auth0.com
//lrL1fQWXzNB8mmzLOIfIH7KXUMCyJn4A
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-otx3ckk6.us.auth0.com"
        clientId="lrL1fQWXzNB8mmzLOIfIH7KXUMCyJn4A"
        redirectUri={window.location.origin}
      >
        <UserContextProvider>
          <ProductContextProvider>
            <FilterContextProvider>
              <CartContextProvider>
                <App />
              </CartContextProvider>
            </FilterContextProvider>
          </ProductContextProvider>
        </UserContextProvider>
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);
