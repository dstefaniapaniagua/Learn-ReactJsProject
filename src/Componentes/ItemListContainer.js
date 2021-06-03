import React from 'react'; 
import ItemList from '../Componentes/ItemList';
import { useState, useEffect } from "react";
import ItemDetail from '../Componentes/ItemDetail';

import { NavLink, useParams} from "react-router-dom";


export default function ItemListContainer() {
  const [book, setBook] = useState([null]);
    const books = [
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
        category: "mas vendidos"
      },
      {
        id: 4,
        title: "Los cambios que cambian",
        description:"Sobre la voz en el aula",
        price: "$680",
        img: "./assets/2.jpg",
        category: "mas vendidos"
    }
    ];

    const [loading, setLoading] = useState(false);
    //const {id} = useParams ();
  
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        setLoading(true);
        resolve(books);
      }, 2000);
    });
  
    promise.then(
      function (value) {
        setBook(value);
      },
      function (reason) {
        // rechazo
      }
    );

    //¿ Se integran las categorias acá? ¿Como? si hago lo siguiente no me funciona el map
      /* 
        id
        ? getItems.then(resolve => {
            setBook(resolve.filter(i => i.category === id));
            setLoader(false);
          })
        : getItems.then(resolve => {
            setBook(resolve);
            setLoader(false);
          });   
          }, [id])

          /*const categories = [
            { address: '/', text: 'TODOS LOS PRODUCTOS' },
            { address: '/category/masvendidos', text: 'MAS VENDIDOS' },
            { address: '/category/psicoanalisis', text: 'PSICOANALISIS' },
          
          ];

          return (
            <>
              {categories.map(cat => {
                return (
                  <div className="links">
                    <NavLink to={cat.address}>
                      <button className="categoria">{cat.text}</button>
                    </NavLink>
                  </div>
                );
              })}
              

              {loader && 'CARGANDO...'}
              {!loader && categories?.map(product => <ItemList key={product.id} />)}
            </>
          );
      */

    return (
      <div>
        {books?.map((book) => {
            return (
                <ItemList
                title={book.title} 
                img={book.img} 
                description={book.description} 
                price={book.price}
                loading={loading}
                >
                       {books.title}
                </ItemList>
            );
        })}
      </div>
  );

};

