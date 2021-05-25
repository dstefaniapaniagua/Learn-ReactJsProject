 
import MediaCard from '../Componentes/Item';




export default function ItemList () {
    const books = [ 
        { id: 1,
        title: "El psicoanálisis en debate", 
        description: "Una lectura sobre las problemáticas del psicoanálisis y de la salud mental." ,
        price: "$500", 
        img:'./assets/1.jpg'
    },

    {   id: 2,
        title: " Del síntoma al fantasma, Y retorno", 
        description: "Curso de 25 capítulos tuvo un antecedente que no puede pasar desapercibido. " ,
        price: "$800", 
        img:"./assets/2.jpg"
    },

    {   id: 3,
        title: "Ser analista hoy", 
        description: "Permite reubicar el campo del psicoanálisis en el de las prácticas sociales de la actualidad." ,
        price: "$600", 
        img: './assets/3.jpg'
    }
    ];

    const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(books); 
    }, 2000);
    });

    promise.then(
    function (value) {
        console.log(value);
    },
    function (reason) {
        // rechazo
    }
    );

    return (
        <div>
          {books.map((book) => {
              return (
                  <MediaCard title={book.title} img={book.img} description={book.description} price={book.price}>
                      {books.title}
                  </MediaCard>
              );
          })}
        </div>
    );
}





