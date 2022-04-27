import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useCartContext } from "../utils/context/CartContext";
import { UserPorvider } from "../utils/context/UserContext";
const Navbar = () => {
  console.log(styles);
  let { cart, total_items } = useCartContext();
  console.log(total_items);
  let { login, logout, user } = UserPorvider();
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
          {user && (
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
          )}
          {!user ? (
            <li>
              <button onClick={login}>Login</button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
