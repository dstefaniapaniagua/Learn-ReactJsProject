import React from "react";
import ItemDetail from "../Componentes/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../utils/dataProductos";
import CircularProgress from "@material-ui/core/CircularProgress";

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    /* promise
      .then((res) => {
        const items = res.docs.map((item) => item.data());
        console.log(items);
        setProduct(items.filter((item) => item.id === productId));
      })
      .then(() => setLoading(true));*/
    productId
      ? promise.then((res) => {
          setProduct(res.filter((i) => i.id === productId));
          setLoading(false);
        })
      : promise.then((res) => {
          setProduct(res);
          setLoading(false);
        });
  }, [productId]);

  return (
    <div className="itemDetailContainer">
      {loading ? (
        <div className="progress">
          {" "}
          <CircularProgress />{" "}
        </div>
      ) : (
        product?.map((pro) => (
          <ItemDetail
            key={pro.title}
            id={pro.id}
            img={pro.img}
            price={pro.price}
            title={pro.title}
            largeDescription={pro.largeDescription}
          />
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
