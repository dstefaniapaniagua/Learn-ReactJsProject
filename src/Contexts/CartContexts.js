import {useState, createContext, useContext} from "react";

export const CartContext = () => useContext(CartContext);

export const ThemeProvider = ({children}) => {
    const []= useState(false);
    return (
        <CartContext.Provider value={null}>{children}
        </CartContext.Provider>
    );
};

//Falta importar el provider a App