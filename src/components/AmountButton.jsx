import React from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

let qtyStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1rem)",
  alignItems: "centers",
  placeItems: "center",
  fontSize: "2rem",
  placeContent: "center",
  gap: "1rem",
  margin: "1rem 0 0 0",
};
let iconStyles = {
  fontSize: "1.3rem",
};
const AmountButton = ({ increase, amount, decrease }) => {
  return (
    <div>
      <div style={qtyStyles}>
        <FiMinusCircle onClick={decrease} />
        <h3 style={iconStyles}>{amount}</h3>

        <FiPlusCircle onClick={increase} />
      </div>
    </div>
  );
};

export default AmountButton;
