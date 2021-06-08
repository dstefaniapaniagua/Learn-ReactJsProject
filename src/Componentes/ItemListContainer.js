import React from "react";
import ItemList from "../Componentes/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../utils/dataProductos";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../Styles/itemListContainer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    id
      ? promise.then((res) => {
          setProduct(res.filter((i) => i.category === id));
          setLoading(false);
        })
      : promise.then((res) => {
          setProduct(res);
          setLoading(false);
        });
  }, [id]);

  return (
    <div className="itemListDiv">
      {id ? (
        <span style={{ display: "none" }}>`${id}`</span>
      ) : (
        <h2 style={{ textAlign: "center" }}>¡Bienvenidxs a Learn!</h2>
      )}
      {loading ? (
        <div className="progress">
          {" "}
          <CircularProgress />{" "}
        </div>
      ) : (
        product.map((pro, i) => (
          <ItemList
            img={pro.img}
            price={pro.price}
            key={pro.title}
            title={pro.title}
            description={pro.description}
          />
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
