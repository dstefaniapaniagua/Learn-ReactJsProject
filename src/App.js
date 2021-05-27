import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';


function App() {
  return (
    <>
      <Navbar/>
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}

export default App;
