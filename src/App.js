import React from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Error404 from "./Componentes/Error404";
import CartProvider from "./Componentes/Contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="">
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

//falta mejorar estilado
