import React from 'react'; 
import {useState} from 'react'; 
import ItemCount from '../Componentes/ItemCount';
import '../Styles/itemCount.css';


export default function ItemListContainer(){

    const[cantidad, setCantidad] = useState(1);

    const handleCantidad = (cantidad) => {
        setCantidad(cantidad);
    }

    return(
    <>
        <h1 style={{ textAlign: 'center', color: "grey"}}>Bienvenido/a a Learn!</h1>
        <ItemCount stock={5} initial={1} onAdd={handleCantidad}/>
        <div className="AddCart">
            <button>Agregar al Carro ({cantidad})</button>
        </div>
    </>
    )
};
