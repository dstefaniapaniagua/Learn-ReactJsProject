import React from 'react';
import Item from "../Componentes/Item";

const ItemList = ({id,  title, description, img, price}) => {

    return ( 
       /* <div>
            {products?.map((product)=>{
                return(<Item key={product.id} item={product}></Item>)
            })}
        </div> */
       <div className="ItemList">
            <Item  key={id} title={title} description={description} img={img} price={price}/>
        </div>
    );
     
};
export default ItemList; 

