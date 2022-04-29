import React from "react";
import { Link } from "react-router-dom";
import StripeForm from "../components/StripeForm";
import { useCartContext } from "../utils/context/CartContext";

const CheckOut = () => {
  let { cart } = useCartContext();
  return (
    <div className="stripe-container">
      {cart.length < 1 ? (
        <div>
          <h2>Your cart is empty</h2>
          <Link to="/products">Fill It</Link>
        </div>
      ) : (
        <StripeForm />
      )}
    </div>
  );
};

export default CheckOut;
