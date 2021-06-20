import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

export default function EmptyCart() {
  return (
    <div className="EmptyCart">
      <h2>Tu carrito de compras está vacío</h2>
      <NavLink to="/">
        <button>Volver a la Tienda</button>
      </NavLink>
    </div>
  );
}
