import React from "react";
import { Link } from "react-router-dom";
import { BiSad } from "react-icons/bi";
const Error = () => {
  return (
    <div className="error">
      <p>404 page Not Found</p>
      <h3>
        Sorry for Inconvinence <BiSad />
      </h3>
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default Error;
