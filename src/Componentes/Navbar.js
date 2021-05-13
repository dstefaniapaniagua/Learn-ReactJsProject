import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const Navbar = () => {
    return (
        <AppBar position="static" style={{ background: "grey"}}>
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">
                LEARN
            </Typography>
            <div style={{ marginLeft: "auto"}} >
                <Button style={{ color: "white"}}>Authors</Button>
                <Button style={{ color: "white"}}>E-books</Button>
                <Button style={{ color: "white"}}>Articles</Button>
                <Button style={{ background: "black", color: "white"}}>Login</Button>
            </div>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
