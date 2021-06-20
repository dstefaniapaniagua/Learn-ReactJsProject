import React from "react";
import { useCart } from "../Contexts/CartContext";
import Cart from "../Componentes/Cart";
import EmptyCart from "../Cart/EmptyCart";

export default function CartContainer() {
  const cart = useCart();
  return (
    <div className="CartContainer">
      {cart.cart.totalQuantity === 0 ? <EmptyCart /> : <Cart />}
    </div>
  );
}
