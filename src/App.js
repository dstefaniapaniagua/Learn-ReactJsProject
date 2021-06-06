import React from 'react';
import './App.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Navbar from './Componentes/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path='/category/:id'>
          <ItemListContainer />
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
    
}

export default App;
