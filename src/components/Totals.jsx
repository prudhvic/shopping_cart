import React from "react";
import { useCartContext } from "../utils/context/CartContext";
import { UserPorvider } from "../utils/context/UserContext";
import Format from "../utils/func/Format";
import "./Cart.css";
const Totals = () => {
  let { user, login } = UserPorvider();
  let { shipping_fee, total_amount: total_price } = useCartContext();
  return (
    <div className="price-details">
      <h2>SubTotal:{Format(total_price)}</h2>
      <h2>shipping fee:{Format(shipping_fee)}</h2>
      <hr />
      <h3>Order Total:{Format(shipping_fee + total_price)}</h3>
      {!user && <button onClick={login}>Login</button>}
      {user && <button> proceed to checkout</button>}
    </div>
  );
};

export default Totals;
