import React from 'react';
import { AppBar, Toolbar, Button} from "@material-ui/core";
import '../Styles/navbar.css';
import CartWidget from './CartWidget';
import ContainerMenu from './ContainerMenu';
import { NavLink, Link} from 'react-router-dom';


const NavBar = () => {

    return (
        <AppBar className="header" position="static" style={{ background: "grey", display:"inline-block"}}>
            <Toolbar className="toolbar"> 
            <Link to="/" className='links-nav' style={{ variant: "h1", fontWeight: "bold", marginLeft: 130}}>
                LEARN
            </Link> 
            <div style={{ marginLeft: "auto"}} >
                <ContainerMenu />
                <CartWidget />
                <Button id="login" style={{ marginLeft: 40,background: "black", color: "white"}}>Login</Button>
            </div>
            </Toolbar>
        </AppBar> 
    );
};
export default NavBar;