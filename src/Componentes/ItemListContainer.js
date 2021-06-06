import React from 'react'; 
import ItemList from '../Componentes/ItemList';
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import data from '../utils/dataProductos.json'; 


const ItemListContainer = (props) => {
  const [product, setProduct] = useState([null]);
  const {id} = useParams ();
  const [loading, setLoading] = useState(false);
    

   /* const myProducts = [
      {
        id: 1,
        title: "El psicoanálisis en debate",
        description:
          "Una lectura sobre las problemáticas del psicoanálisis y de la salud mental.",
        price: "$500",
        img: "./assets/1.jpg",
        category: "psicoanalisis"
      },
  
      {
        id: 2,
        title: " Del síntoma al fantasma, Y retorno",
        description:
          "Curso de 25 capítulos tuvo un antecedente que no puede pasar desapercibido. ",
        price: "$800",
        img: "./assets/2.jpg",
        category: "psicoanalisis"
      },
      
      {
        id: 3,
        title: "Ser analista hoy",
        description:
          "Permite reubicar el campo del psicoanálisis en el de las prácticas sociales de la actualidad.",
        price: "$600",
        img: "./assets/3.jpg",
        category: "masvendidos"
      },
      {
        id: 4,
        title: "Los cambios que cambian",
        description:"Sobre la voz en el aula",
        price: "$680",
        img: "./assets/2.jpg",
        category: "masvendidos"
    }
    ]; */

  
    useEffect(()=>{
      const promise = new Promise((resolve, reject) => {
        setLoading(true);
        setTimeout(() => {
           resolve(data);
        }, 2000);
      });

      id
      ? promise.then(res => {
          setProduct(res.filter(i => i.category === id));
          setLoading(false);
        })
      : promise.then(res => {
          setProduct(res);
          setLoading(false);
        });
    }, [id]);
   

    return (
      <div className="itemListDiv">
            {id ? `${id}` : "Bienvenidx blabla"}
            {loading ?' Cargando' : <ItemList />}
    
      </div>
      
  );

};

export default ItemListContainer;