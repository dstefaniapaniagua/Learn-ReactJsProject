import React from "react";
import { useCart } from "../Contexts/CartContext";

const Cart = () => {
  const cart = useCart();
  return (
    <div>
      <h1>Carrito de compras</h1>
      <button onClick={cart.clearCart}>Limpiar Carrito</button>
    </div>
  );
};

export default Cart;

// donde agrego el routing? '/cart'
