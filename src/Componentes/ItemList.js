import React from "react";
import Item from "../Componentes/Item";
import "../Styles/item.css";

const ItemList = ({ id, title, description, img, price }) => {
  return (
    <div className="ItemList">
      <Item
        key={id}
        id={id}
        title={title}
        description={description}
        img={img}
        price={price}
      />
    </div>
  );
};
export default ItemList;

//Deberia recibir product como parametro
