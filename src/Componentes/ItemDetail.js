import React, { useState } from "react";
import ItemCount from "../Componentes/ItemCount";
import "../Styles/itemCount.css";
import "../Styles/itemDetail.css";
import FinalizePurchase from "../Componentes/BuyButtons/FinalizePurchase";
import { useCart } from "../Componentes/Contexts/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ id, title, price, largeDescription, img }) {
  const [cantidad, setCantidad] = useState(1);
  const [isPurchase, setIsPurchase] = useState(false);
  const cart = useCart();
  const handleCantidad = (cantidad) => {
    setCantidad(cantidad);
  };

  const addNewProduct = () => {
    setIsPurchase(true);
    cart.addItem({
      id: id,
      title: title,
      price: price,
      quantity: cantidad,
    });
  };

  const handlePurchase = () => {
    console.log("Handling purchase");
  };

  return (
    <div className="ItemDetail">
      <div className="ItemsDetail">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{largeDescription}</p>
        <p className="precio">{price}</p>
        {isPurchase ? (
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <FinalizePurchase fn={handlePurchase} />
          </Link>
        ) : (
          <ItemCount
            stock={5}
            initial={1}
            onAdd={handleCantidad}
            handle={addNewProduct}
          />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;

//codigo anterior:
/*const addNewProduct = (itemData, cantidad) => {
    setIsPurchase(true);
    const details = {
      itemName: itemData[0].title,
      price: itemData[0].price,
      quantity: cantidad,
    };
    cart.addItem(details);
  };*/
