import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../utils/context/CartContext";
import { useProductsContext } from "../utils/context/ProductContext";
import AmountButton from "./AmountButton";

const ProductDetails = ({ colors }) => {
  let { single_product } = useProductsContext();
  let { addToCart } = useCartContext();
  let [amount, setAmount] = useState(1);
  console.log("k", addToCart);
  console.log(single_product);
  let { id } = single_product;

  let increase = () => {
    setAmount((prev) => {
      return single_product.stock === prev ? prev : prev + 1;
    });
  };
  let decrease = () => {
    setAmount((prev) => (prev < 1 ? 1 : prev - 1));
  };

  let colorStyles = {
    display: "inline-block",
    width: "1rem",
    height: "1rem",
    borderRadius: "20px",
    margin: "0 4px",
  };
  let Navigate = useNavigate();
  let AddTocart = (id, single_product, amount) => {
    addToCart(id, single_product, amount);
    Navigate("/cart");
  };
  return (
    <div>
      <p style={{ display: "flex", alignItems: "center" }}>
        Colors:
        {colors &&
          colors.map((color) => (
            <span style={{ ...colorStyles, background: color }}></span>
          ))}
      </p>
      <AmountButton amount={amount} increase={increase} decrease={decrease} />
      <button
        className="add-btn"
        onClick={() => AddTocart(id, single_product, amount)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
