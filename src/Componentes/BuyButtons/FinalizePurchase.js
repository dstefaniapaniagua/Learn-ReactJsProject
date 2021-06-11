import React from "react";
import { Link } from "react-router-dom";

export default function FinalizePurchase(handle) {
  return (
    <div>
      <Link to="/cart">
        <button onClick={handle}>Finalizar Compra</button>
      </Link>
    </div>
  );
}
