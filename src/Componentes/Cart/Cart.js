import React from "react";
import { useCart } from "../Contexts/CartContext";

const Cart = () => {
  const cart = useCart();
  return (
    <div>
      <h1>Sección Carrito de Compras</h1>
    </div>
  );
};

export default Cart;
