import React from 'react'; 
import ItemList from '../Componentes/ItemList';
import { useState, useEffect } from "react";
import data from "../utils/dataProductos.json";
import { Link, useParams} from "react-router-dom";


export default function ItemListContainer() {

  const { catId } = useParams();

    const [books, setBooks] = useState([null]);
    const [loading, setLoading] = useState(false); 
    const  [category, setCategory] = useState(true);

    useEffect(() => {
      const getBooks = new Promise(resolve => {
        setLoading(true);
        setTimeout(() => {
          resolve(data);
        }, 1000);
      });
  
      catId
        ? getBooks.then( res => {
            setBooks(data.filter((item) => item.category === catId));
            setLoading(false);
            setCategory(true);
          })
        : getBooks.then(res => {
            setBooks(data);
            setLoading(false);
          });
    }, [catId, category]);

  
    return (
      <div className="links">
      { catId && catId !== "todos" ? (
        <>
          Encontrá los mejores productos de {catId}
        </>
      ) : (
          "Encontra los Mejores Productos"
      )}

      {category ? (
      <ItemList books={books}   loading={loading} />
      ) : (
      <p>
      La categoría que buscas no existe
      <br />
      <Link to={`/`}>Ver Todos los Productos</Link>
      </p>
    )}
     </div>

  );
};


// codigo de antes de armar el data en jason 
/*const [book, setBook] = useState([null]);
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
        price: $680,
        img: "./assets/2.jpg",
        category: "mas vendidos"
    }
    ];
  
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
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
  
    return (
        <div>
          {books?.map((book) => {
              return (
                  <ItemList
                  title={book.title} 
                  img={book.img} 
                  description={book.description} 
                  price={book.price}>
                         {books.title}
                  </ItemList>
              );
          })}
        </div>
    );
*/ 
