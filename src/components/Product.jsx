import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Format from "../utils/func/Format";
import { FaSearch } from "react-icons/fa";
const Product = ({ products }) => {
  return (
    <div className={styles.products} >
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className={styles.product}
        >
          <div className={styles.img}>
            <img src={product.image} />
            <div className={styles.overlay}>
              <FaSearch />
            </div>
          </div>
          <div className={styles.details}>
            <h2>{product.name}</h2>
            <h3>{Format(product.price)}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
