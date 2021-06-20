import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "../Componentes/Contexts/CartContext";

export default function CartWidget() {
  const cart = useCart();
  console.log(cart.cart.totalQuantity);
  return (
    <>
      <ShoppingCartIcon style={{ color: "white" }} />
    </>
  );
}
