import React from "react";
import { Link } from "react-router-dom";
import land from "../images/land.jpg";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { useProductsContext } from "../utils/context/ProductContext";
import Product from "../components/Product";
const Home = () => {
  let { featured_products: featured } = useProductsContext();
  return (
    <React.Fragment>
      <main className={styles.container}>
        <section>
          <h2>Design Your Comfort Zone</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/products">shop Now</Link>
        </section>
        <section>
          <img className={styles.img} src={land} />
        </section>
      </main>
      <h2
        style={{
          color: "grey ",
          fontWeight: "400",
          marginLeft: "1.8rem",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        featured Products
      </h2>
      <Product products={featured.slice(0, 5)} />
    </React.Fragment>
  );
};

export default Home;
