import React from 'react';
import Item from "../Componentes/Item";

export default function ItemList ({id, title, description, img, price}) {

    return ( 
        <div className="ItemList">
            <Item  id={id} title={title} description={description} img={img} price={price}/>
        </div>
     );

};

