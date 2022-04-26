import React from "react";
import { useProductsContext } from "../utils/context/ProductContext";
import Product from "../components/Product";
import Loading from "../components/Loading";
import Filters from "../components/Filters";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";
import "../components/Filters.css";
import { useState } from "react";
import { useFilterContext } from "../utils/context/FilterContext";
const Products = () => {
  let [openFilter, setOpenFilter] = useState(false);
  let { products_error, products_loading } = useProductsContext();
  //   console.log(ctx);
  if (products_loading) {
    return <Loading />;
  }
  let content;
  let { filtered_products: products } = useFilterContext();
  if (products.length === 0) {
    content = <p>No Products Found</p>;
  }
  let location = useLocation();
  console.log(location);
  return (
    <main className="product-section">
      {location.pathname == "/products" && (
        <button
          className="filter-btn"
          onClick={() => setOpenFilter((prev) => !prev)}
        >
          {!openFilter ? <GiHamburgerMenu /> : <FaTimesCircle color="black" />}
        </button>
      )}
      {openFilter && (
        <Filters
          openFilter={openFilter}
          closeFilter={() => setOpenFilter(false)}
        />
      )}

      {content || (
        <div className="item-section">
          <Product products={products} />
        </div>
      )}
    </main>
  );
};

export default Products;
