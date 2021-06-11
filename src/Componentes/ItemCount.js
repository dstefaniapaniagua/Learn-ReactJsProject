import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/RemoveCircle";
import "../Styles/itemCount.css";
import AddToCart from "../Componentes/BuyButtons/AddToCart";

export default function ItemCounter({ stock, initial, onAdd, handle }) {
  const [contador, setContador] = useState(initial);

  const increase = () => {
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
    }
  };

  return (
    <div className="ItemCounter">
      <div className="Contador">
        <button onClick={substract}>
          <RemoveIcon style={{ color: "purple" }} />
        </button>
        <input type="number" value={contador} />
        <button onClick={increase}>
          <AddIcon style={{ color: "purple" }} />
        </button>
      </div>
      <AddToCart handle={handle} />
    </div>
  );
}
