import React from 'react';
import './App.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import NavBar from './Componentes/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
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
