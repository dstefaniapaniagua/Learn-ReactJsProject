import React, { useState } from "react";
import ItemCount from "../Componentes/ItemCount";
import "../Styles/itemCount.css";
import "../Styles/itemDetail.css";
import FinalizePurchase from "../Componentes/BuyButtons/FinalizePurchase";

function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const [cart, setCart] = useState(false);
  const handleClick = () => {
    setCart(true);
  };

  return (
    <div className="ItemDetail">
      <div className="ItemsDetails">
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="precio">{item.price}</p>
        {cart ? (
          <FinalizePurchase />
        ) : (
          <div className="contador" style={{ marginLeft: 50, marginTop: 20 }}>
            <ItemCount
              stock={5}
              initial={1}
              onAdd={handleCantidad}
              handle={handleClick}
            />
          </div>
        )}
        <button
          size="big"
          color="primary"
          style={{
            marginLeft: 650,
            background: "purple",
            color: "white",
            width: 200,
            marginTop: 10,
            padding: 15,
            borderRadius: 6,
            fontSize: 19,
          }}
        >
          Comprar ({cantidad})
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
