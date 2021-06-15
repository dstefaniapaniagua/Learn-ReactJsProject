import React from "react";
import { useState, createContext, useContext } from "react";

export const CartContext = () => createContext();
export const useCart = () => useContext(CartContext);

const initialState = {
  addedItems: [{ name: "Libro", price: 800, quantity: 0 }],
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);
  //const [product, setProduct] = useState([]);

  const addItem = (item) => {
    console.log(item.name);
    console.log(item.quantity);

    if (cart.addedItems.find((addedItem) => addedItem.name === item.name)) {
      item.quantity += cart.addedItems.quantity;
      console.log(cart.addedItems.quantity, "carrito de compras");
      // ya existe el item, hacer algo
      console.log(item, "array");
      return;
    }

    /*const newAddedItems = cart.addedItems.map((product) => {
      if (product.name === "Bicicleta") return { ...product, quantity: 2 };

      return product;
    });*/

    const newAddedItems = [...cart.addedItems, item];
    setCart({ ...cart, addedItems: newAddedItems });
  };

  const deleteItem = (item) => {
    if (cart.addedItems.filter((remove) => remove.id !== item.id)) {
      console.log("Se ha borrado el item");
    }
    //va remove.id o item?
  };

  const clearCart = () => {
    setCart(initialState);
  };

  console.log(cart, "carrito context");

  return (
    <>
      <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    </>

    /*value={{cart, addItem, deleteItem, clearCart}}*/
  );
};

//Pregunta: el useState tendría que ir vacío o null?
