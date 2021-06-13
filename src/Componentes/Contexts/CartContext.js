import { useState, createContext, useContext, useEffect } from "react";
import data from "../utils/dataProductos";

export const CartContext = () => createContext();
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [product, setProduct] = useState([null]);
  const [cart, setCart] = useState(false);
  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
      console.log(data);
    });
    promise.then((res) => {
      setProduct(res);
      console.log("toda la data", res);
    });
  }, []);

  return (
    <>
      <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    </>
  );
}

//Pregunta: el useState tendría que ir vacío o null?
