import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

const ContainerMenu = () => {
  
    const categories = [
        { address: '/', text: 'TODOS LOS PRODUCTOS' },
        { address: '/category/masvendidos', text: 'MAS VENDIDOS' },
        { address: '/category/psicoanalisis', text: 'PSICOANALISIS' },
      ];

      return (
        <>
          {categories.map(categories => {
            return (
              <div className="links">
                <NavLink to={categories.address}>
                  <button className="categoria">{categories.text}</button>
                </NavLink>
              </div>
            );
          })}
        </>
      );
  
  
         /* {loader && 'CARGANDO...'}
          {!loader && categories?.map(product => <ItemList key={product.id} />)}*/ 
  
    /* const [categories]=useState(["MAS VENDIDOS", "PSICOANALISIS", "EBOOKS"])
    return (

        <Container>

        {categories?.map((x) => {
            return (
               <Categories />
            );
        })}
        </Container>
    )*/
}; 

/*const Container = styled.div`
    position:relative;
    div{
    display:flex;
    flex-direction:column;
    } */

export default ContainerMenu; 