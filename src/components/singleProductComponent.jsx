import React from "react";
import { useProductsContext } from "../utils/context/ProductContext";
import Format from "../utils/func/Format";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import styles from "./single.module.css";
const SingleProductComponent = () => {
  let { single_product: product } = useProductsContext();
  console.log(product);
  let {
    id,
    company,
    stock,
    name,
    description,
    colors,
    price,
    images: pics,
  } = product;
  console.log(pics);
  //   console.log("uimages", images[0].url);

  return (
    <React.Fragment>
      <div className={styles.singleProduct}>
        <ProductImages pics={pics && pics} />
        <div className={styles.details}>
          <h2>{name}</h2>
          <h4>{Format(price)}</h4>
          <p>{description}</p>
          <div className={styles.calcs}>
            <h3>Available:{stock > 0 ? "In Stock" : "out of stock"}</h3>
            <h3>SKU:{id}</h3>
            <h3>Brand:{company}</h3>
          </div>
        </div>
        <div>
          <ProductDetails colors={colors} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProductComponent;
