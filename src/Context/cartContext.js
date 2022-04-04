import {createContext,useContext,useState,useReducer} from "react";
import { cartReducer } from "../Reducer/cartReducer2";

const defaultValue = {
    cart:[],
    cartitems: 0,
    cartprice: 0
}

const CartContext = createContext(defaultValue);

const CartProvider = ({children})=>{
    const [cartstate, cartdispatch] = useReducer(cartReducer, {
        cart:[],
        cartitems: 0,
        cartprice: 0
      });

    return(
    <CartContext.Provider value={{cartstate,cartdispatch}}>
        {children}
    </CartContext.Provider>)
}

const useCart = () => useContext(CartContext);

export {useCart,CartProvider}; 