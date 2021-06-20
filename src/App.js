import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Error404 from "./Componentes/Error404";
import CartProvider from "./Componentes/Contexts/CartContext";
import Cart from "./Componentes/Cart/Cart";

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
          <Route exact path="/product">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/product/:productId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/">
            <Error404 />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

//falta mejorar estilado
