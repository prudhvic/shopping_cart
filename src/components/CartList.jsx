import React from "react";
import { useCartContext } from "../utils/context/CartContext";
import AmountButton from "./AmountButton";
import { AiFillDelete } from "react-icons/ai";
import Format from "../utils/func/Format";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import Totals from "./Totals";
const CartList = () => {
  let { cart, toggleAmount, removeItem, clear_cart } = useCartContext();
  let Navigate = useNavigate();
  console.log(cart);
  return (
    <>
      {cart.length !== 0 ? (
        <>
          <div className="cart">
            {cart.map((item) => (
              <div className="cart-item">
                <div className="flex-details">
                  <img src={item.image} />
                  <div className="details">
                    <h2>{item.name}</h2>
                    <h3>Color:{item.color}</h3>
                  </div>
                </div>

                <h2>Price:{Format(item.price)}</h2>

                <AmountButton
                  amount={item.amount}
                  increase={() => toggleAmount(item.id, "inc")}
                  decrease={() => toggleAmount(item.id, "dec")}
                />

                <h2>Total:{Format(item.amount * item.price)}</h2>
                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <AiFillDelete />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-btns">
            <button className="ctn-btn" onClick={() => Navigate("/products")}>
              continue shopping
            </button>
            {cart.length > 0 && (
              <button className="clr-btn" onClick={clear_cart}>
                clear shopping cart
              </button>
            )}
          </div>
          <div className="flex-price">
            <Totals />
          </div>
        </>
      ) : (
        <div className="flex">No Items please add something</div>
      )}
    </>
  );
};

export default CartList;
