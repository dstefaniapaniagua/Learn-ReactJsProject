import React from 'react'; 
import ItemDetail from '../Componentes/ItemDetail';
import { useState , useEffect} from "react";


export default function ItemListContainer(){

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            let products = [
                {
                  id: 1,
                  title: "El psicoanálisis en debate",
                  description:
                    "Una lectura sobre las problemáticas del psicoanálisis y de la salud mental.",
                  price: "$500",
                  img: "./assets/1.jpg",
                },
            
                {
                  id: 2,
                  title: " Del síntoma al fantasma, Y retorno",
                  description:
                    "Curso de 25 capítulos tuvo un antecedente que no puede pasar desapercibido. ",
                  price: "$800",
                  img: "./assets/2.jpg",
                },
            
                {
                  id: 3,
                  title: "Ser analista hoy",
                  description:
                    "Permite reubicar el campo del psicoanálisis en el de las prácticas sociales de la actualidad.",
                  price: "$600",
                  img: "./assets/3.jpg",
                },
              ];
            setTimeout(() => {
                resolve(products[0])
            }, 2000);
        });
        getItems.then(
            function (value) {
              setProduct(value);
            }, //Sale bien
            function (reason) {
              // rechazo
            }
          );
    }, [])

    return (
        <div className="ItemDetailContainer">
        <h2 className="title" style={{textAlign: "center"}}>Item Detail Demo</h2>
        <ItemDetail item={product}/>
        </div>
    );
}
   
    