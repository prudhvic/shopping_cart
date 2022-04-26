import React, { useState } from "react";
import styles from "./single.module.css";
import { motion } from "framer-motion";
const ProductImages = ({ pics }) => {
  console.log("Hi", pics);
  let [main, setMain] = useState({ url: pics && pics[0].url });
  return (
    <div className={styles.gallery}>
      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={main.url}
        className={styles.main}
      />
      <div className={styles.pics}>
        {pics &&
          pics.map((pic) => (
            <img
              src={pic.url}
              key={pic.id}
              onClick={() => setMain({ url: pic.url })}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductImages;
