import React from "react";

const AddToCart = ({ handle }) => {
  return (
    <div>
      <button
        style={{
          background: "purple",
          color: "white",
          width: 200,
          marginTop: 30,
        }}
        onClick={handle}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default AddToCart;

/*style={{
          background: "purple",
          color: "white",
          width: 200,
          marginTop: 30,
          padding: 5,
        }}*/
