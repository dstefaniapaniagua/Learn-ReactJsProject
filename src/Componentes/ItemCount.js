import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/RemoveCircle";
import "../Styles/itemCount.css";
import AddToCart from "../Componentes/BuyButtons/AddToCart";
import { useCart } from "../Componentes/Contexts/CartContext";

let stock = 5;

const ChangeStock = () => {
  const [monto, setMonto] = useState(stock);
  const [contador, setContador] = useState(0);

  const increaseItem = () => {
    if (contador === stock)
      return console.log("No hay stock para sumar más items a tu carrito");
    setMonto(monto - 1);
    setContador(contador + 1);
  };

  const substractItem = (stock) => {
    if (contador === 0 || monto === stock)
      return console.log("No podes restar más items a tu carrito");
    setMonto(monto + 1);
    setContador(contador - 1);
  };
  return { monto, increaseItem, substractItem, contador };
};

//codigo anterior
/*const increase = () => {
    if (contador < stock) {
      setContador((contador) => {
        setContador(contador + 1);
        onAdd(contador);
      });
    }
  };

  const substract = () => {
    if (contador > initial) {
      setContador((contador) => {
        let cont = contador - 1;
        onAdd(cont);
        return cont;
      });
    }*/

export default function ItemCounter({ handle }) {
  const { monto, increaseItem, substractItem, contador } = ChangeStock();
  const cart = useCart();

  return (
    <div className="ItemCounter">
      <div className="Contador">
        <button onClick={substractItem}>
          <RemoveIcon style={{ color: "purple" }} />
        </button>
        <input type="number" value={contador} />
        <button onClick={increaseItem}>
          <AddIcon style={{ color: "purple" }} />
        </button>
      </div>
      <AddToCart handle={handle} />
      <div>
        <span>Cantidad disponible: {monto}</span>
      </div>
    </div>
  );
}
