import React from "react";
import { Link } from "react-router-dom";

const FinalizePurchase = ({ handle }) => {
  return (
    <div>
      <Link to="/cart">
        <button onClick={handle}>Finalizar Compra</button>
      </Link>
    </div>
  );
};
export default FinalizePurchase;
