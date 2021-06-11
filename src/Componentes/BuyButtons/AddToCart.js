import React from "react";

export default function AddToCart({ handle }) {
  return (
    <div>
      <button
        onClick={handle}
        style={{
          background: "purple",
          color: "white",
          width: 200,
          marginTop: 30,
          padding: 5,
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
