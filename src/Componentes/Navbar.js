import React from 'react';
import { AppBar, Toolbar, Button} from "@material-ui/core";
import '../Styles/navbar.css';
import CartWidget from '../Componentes/CartWidget';
import { NavLink, Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <AppBar className="header" position="static" style={{ background: "grey",}}>
            <Toolbar className="toolbar">
            <Link to="/" className='links-nav' style={{ variant: "h1", fontWeight: "bold", marginLeft: 130}}>
                LEARN
            </Link> 
            <div style={{ marginLeft: "auto"}} >
                <NavLink to="'/" className='links-nav' style={{ marginLeft: 40}}>Home</NavLink>
                <NavLink to="/category/:id" className='links-nav'  style={{ marginLeft: 50}}>Más vendidos</NavLink>
                <NavLink to="/category/:id" className='links-nav'  style={{ marginLeft: 50, marginRight: 40}}>Psicoanálisis</NavLink>
                <CartWidget />
                <Button id="login" style={{ marginLeft: 40,background: "black", color: "white"}}>Login</Button>
            </div>
            </Toolbar>
        </AppBar> 
    );
};
export default NavBar;

