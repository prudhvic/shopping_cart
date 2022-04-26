import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useCartContext } from "../utils/context/CartContext";
const Navbar = () => {
  console.log(styles);
  let { cart, total_items } = useCartContext();
  console.log(total_items);
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} />
        WoodStock
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              style={(props) =>
                props.isActive ? { color: "red" } : { color: "black" }
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={(props) =>
                props.isActive ? { color: "red" } : { color: "black" }
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={(props) =>
                props.isActive ? { color: "red" } : { color: "black" }
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li className={styles["cart-total"]}>
            <NavLink
              to="/cart"
              style={(props) =>
                props.isActive ? { color: "red" } : { color: "black" }
              }
            >
              My cart
              <FaShoppingCart />
              <span className={styles["cart-items"]}>{total_items}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={(props) =>
                props.isActive ? { color: "red" } : { color: "black" }
              }
              to="/checkout"
            >
              checkout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
