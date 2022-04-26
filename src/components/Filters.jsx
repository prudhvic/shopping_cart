import React, { useContext } from "react";
import { useFilterContext } from "../utils/context/FilterContext";
import { getUniqueValues } from "../utils/func/helpers";
import Format from "../utils/func/Format";
import { motion } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Filters.css";
const Filters = ({ closeFilter }) => {
  let {
    update_sort,
    sort,
    clearFilters,
    updateFilters,
    filters,
    all_products,
  } = useFilterContext();
  let catergories = getUniqueValues(all_products, "category");
  console.log(catergories);
  let colors = getUniqueValues(all_products, "colors");
  let company = getUniqueValues(all_products, "company");
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        className="filter-section"
      >
        <div className="filters">
          <div className="search">
            <input
              type="text"
              name="text"
              placeholder="search items"
              onChange={updateFilters}
              value={filters.text}
            />
          </div>
          <div className="category">
            <h3>category</h3>
            <div className="categories">
              {catergories.map((category) => (
                <button
                  className={category === filters.category ? "active-btn" : ""}
                  onClick={updateFilters}
                  name="category"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="color">
            <h3>Color:</h3>

            <div className="colors">
              <button
                onClick={updateFilters}
                className={filters.color === "all" ? "active-btn" : ""}
                data-color="all"
                name="color"
              >
                All
              </button>
              {colors.map((color) =>
                color !== filters.color ? (
                  <button
                    onClick={updateFilters}
                    name="color"
                    data-color={color}
                    style={{
                      background: color,
                      width: "1rem",
                      height: "1rem",
                      borderRadius: "50%",
                    }}
                  ></button>
                ) : (
                  <AiFillCheckCircle color={color} size={20} />
                )
              )}
            </div>
          </div>
          <div className="flex-item">
            <h3>Company:</h3>
            <select onChange={updateFilters} name="company">
              {company.map((c) => (
                <option value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex-item">
            <h3>Sort By:</h3>
            <select name="sort" onChange={update_sort} value={sort}>
              <option value="price-lowest">price (low-high)</option>
              <option value="price-highest">price (high-low)</option>
              <option value="name-a">name (a-z)</option>
              <option value="name-z">name (z-a)</option>
            </select>
          </div>

          <div className="flex-item">
            <h3>Price:</h3>
            <h3>{Format(filters.price)}</h3>

            <input
              type="range"
              name="price"
              onChange={updateFilters}
              value={filters.price}
              max={filters.max_price}
              min={filters.min_price}
            />
          </div>
          <div className="flex-item">
            <label htmlFor="shipping">Free shipping</label>
            <input
              id="shipping"
              type="checkbox"
              checked={filters.shipping}
              onChange={updateFilters}
              name="shipping"
            />
          </div>
          <div className="btns">
            <button className="clear-btn" onClick={clearFilters}>
              clear Filters
            </button>
            <button className="clear-btn clear-btn-2" onClick={closeFilter}>
              Update
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Filters;
