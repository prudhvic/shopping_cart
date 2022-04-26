import React, { useEffect, useState } from "react";
import { useProductsContext } from "../utils/context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";
import { products_url } from "../utils/Actions";
import SingleProductComponent from "../components/singleProductComponent";
import Loading from "../components/Loading";
const SingleProduct = () => {
  let Navigate = useNavigate();
  let { id } = useParams();
  console.log("single");
  let {
    fetchSingleProduct,
    single_product_error: error,
    single_product_loading: loading,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(
      `https://course-api.com/react-store-single-product?id=${id}`
    );
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error</p>;
  }
  //   console.log(single_product);
  let btnBack = {
    background: "black",
    color: "white",
    padding: "10px",
    fontWeight: "600",
    borderRadius: "10px",
    alignSelf: "start",
  };
  let mainStyles = {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: "1060px",
  };
  return (
    <main style={mainStyles}>
      <button style={btnBack} onClick={() => Navigate("/products")}>
        Back to products
      </button>
      <section>{<SingleProductComponent />}</section>
    </main>
  );
};

export default SingleProduct;
