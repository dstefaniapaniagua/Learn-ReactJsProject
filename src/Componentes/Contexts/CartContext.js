import React from "react";
import { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = {
  addedItems: [{ name: "Libro", price: 900, quantity: 0 }],
  totalPrice: 0,
};

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(initialState);
  const [product, setProduct] = useState([null]);

  const addItem = (item) => {
    console.log("addItem");

    // CartContext functions: with reduce and find method
    const totalSum = () => {
      return cart.addedItems.reduce(
        (acc, items) => (acc += items.price * items.quantity),
        0
      );
    };

    const isInCart = cart.addedItems.find((added) => added.id === item.id);
    if (isInCart) {
      isInCart.quantity += item.quantity;
      setCart({ ...cart });
    } else {
      const newAddedItems = [...cart.addedItems, item];
      setCart({
        ...cart,
        addedItems: newAddedItems,
        totalPrice: totalSum(cart.totalPrice, item),
      });
      console.log("carrito context", cart);
    }
  };

  //Rmover un item por id:
  const deleteItem = (item) => {
    if (cart.addedItems.filter((remove) => remove.id !== item.id)) {
      console.log("Se ha borrado el item");
    }
  };

  //Remover todos los items:
  const clearCart = () => {
    setCart(initialState);
  };

  // Devuelve true or false:
  const isInCart = () => {
    console.log("Clickeaste en el carrito");
    //Hay que aplicar algún método de Js? por ejemplo, un find() para buscar por id?
  };

  console.log(cart, "Carrito context");

  return (
    <>
      <CartContext.Provider
        value={{ cart, product, addItem, deleteItem, clearCart, isInCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
