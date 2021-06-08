import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import '../Styles/containerMenu.css';



const ContainerMenu = () => {
  
    const categories = [
        { address: '/', text: 'TODOS LOS PRODUCTOS' },
        { address: '/category/masvendidos', text: 'MAS VENDIDOS' },
        { address: '/category/psicoanalisis', text: 'PSICOANALISIS' },
      ];

      return (
        <div className="container">
          {categories.map(categories => {
            return (
              <div className="links">
                <NavLink to={categories.address} className="iNav" >
                  <button className="categoria" 
                    style={{color:"white", background:"none", border:"none", fontStyle:"bold", paddingTop: 10}}>
                      {categories.text}
                  </button>
                </NavLink>
              </div>
            );
          })}
        </div>
      );
}; 


export default ContainerMenu; 