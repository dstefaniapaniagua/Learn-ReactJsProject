import React from 'react';
import { AppBar, Toolbar, Button} from "@material-ui/core";
import '../Styles/navbar.css';
import CartWidget from '../Componentes/CartWidget';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <AppBar className="header" position="static" style={{ background: "grey",}}>
            <Toolbar className="toolbar">
            <Link to="/" style={{ color: "white", variant: "h1", fontWeight: "bold", textDecoration:"none", marginLeft: 130 }}>
                LEARN
            </Link> 
            <div style={{ marginLeft: "auto"}} >
                <Button>Home</Button>
                <Button>Más vendidos</Button>
                <Button>Psicoanálisis</Button>
                <CartWidget />
                <Button id="login" style={{ marginLeft: 40,background: "black", color: "white"}}>Login</Button>
            </div>
            </Toolbar>
        </AppBar> 
    );
};
export default NavBar;

// se agrega una class="categorias" en el div de la linea 14? o se agregan las categorias en ItemListContainer? 