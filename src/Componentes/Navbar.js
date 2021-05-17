import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import '../Styles/navbar.css';
import CartWidget from '../Componentes/CartWidget';



const Navbar = () => {
    return (
        <AppBar class="header" position="static" style={{ background: "grey",}}>
            <Toolbar className="toolbar">
            <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: 35}}>
                <MenuIcon />
            </IconButton>
            <Typography style={{ color: "white", variant: "h3", fontWeight: "bold"}}>
                LEARN
            </Typography>
            <div style={{ marginLeft: "auto"}} >
                <Button>Home</Button>
                <Button>Authors</Button>
                <Button>E-books</Button>
                <Button>Articles</Button>
                <CartWidget />
                <Button id="login" style={{ marginLeft: 40,background: "black", color: "white"}}>Login</Button>
            </div>
            </Toolbar>
        </AppBar> 
    );
};
export default Navbar;