import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CheckOut from "./pages/CheckOut";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import PrivateRoute from "./PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";
function App() {
  console.log("hI", import.meta.env.REACT_STRIPE_PUBLIC_KEY);

  return (
    <div className="App">
      <Navbar />
      <AuthWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            exact
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthWrapper>

      <Footer />
    </div>
  );
}

export default App;
